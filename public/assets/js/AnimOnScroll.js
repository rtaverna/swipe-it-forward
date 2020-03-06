/**
 * animOnScroll.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
(function(window) {
  const docElem = window.document.documentElement;

  function getViewportH() {
    const client = docElem.clientHeight;
    const inner = window.innerHeight;

    if (client < inner) return inner;
    return client;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  // http://stackoverflow.com/a/5598797/989439
  function getOffset(el) {
    let offsetTop = 0;
    let offsetLeft = 0;
    do {
      if (!isNaN(el.offsetTop)) {
        offsetTop += el.offsetTop;
      }
      if (!isNaN(el.offsetLeft)) {
        offsetLeft += el.offsetLeft;
      }
    } while ((el = el.offsetParent));

    return {
      top: offsetTop,
      left: offsetLeft
    };
  }

  function inViewport(el, h) {
    const elH = el.offsetHeight;
    const scrolled = scrollY();
    const viewed = scrolled + getViewportH();
    const elTop = getOffset(el).top;
    const elBottom = elTop + elH;
    // if 0, the element is considered in the viewport as soon as it enters.
    // if 1, the element is considered in the viewport only when it's fully inside
    // value in percentage (1 >= h >= 0)
    var h = h || 0;

    return elTop + elH * h <= viewed && elBottom - elH * h >= scrolled;
  }

  function extend(a, b) {
    for (const key in b) {
      if (b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  }

  function AnimOnScroll(el, options) {
    this.el = el;
    this.options = extend(this.defaults, options);
    this._init();
  }

  AnimOnScroll.prototype = {
    defaults: {
      // Minimum and a maximum duration of the animation (random value is chosen)
      minDuration: 0,
      maxDuration: 0,
      // The viewportFactor defines how much of the appearing item has to be visible in order to trigger the animation
      // if we'd use a value of 0, this would mean that it would add the animation class as soon as the item is in the viewport.
      // If we were to use the value of 1, the animation would only be triggered when we see all of the item in the viewport (100% of it)
      viewportFactor: 0
    },
    _init() {
      this.items = Array.prototype.slice.call(
        document.querySelectorAll(`#${this.el.id} > li`)
      );
      this.itemsCount = this.items.length;
      this.itemsRenderedCount = 0;
      this.didScroll = false;

      const self = this;

      imagesLoaded(this.el, () => {
        // initialize masonry
        new Masonry(self.el, {
          itemSelector: "li",
          transitionDuration: 0
        });

        if (Modernizr.cssanimations) {
          // the items already shown...
          self.items.forEach((el, i) => {
            if (inViewport(el)) {
              self._checkTotalRendered();
              classie.add(el, "shown");
            }
          });

          // animate on scroll the items inside the viewport
          window.addEventListener(
            "scroll",
            () => {
              self._onScrollFn();
            },
            false
          );
          window.addEventListener(
            "resize",
            () => {
              self._resizeHandler();
            },
            false
          );
        }
      });
    },
    _onScrollFn() {
      const self = this;
      if (!this.didScroll) {
        this.didScroll = true;
        setTimeout(() => {
          self._scrollPage();
        }, 60);
      }
    },
    _scrollPage() {
      const self = this;
      this.items.forEach((el, i) => {
        if (
          !classie.has(el, "shown") &&
          !classie.has(el, "animate") &&
          inViewport(el, self.options.viewportFactor)
        ) {
          setTimeout(() => {
            const perspY = scrollY() + getViewportH() / 2;
            self.el.style.WebkitPerspectiveOrigin = `50% ${perspY}px`;
            self.el.style.MozPerspectiveOrigin = `50% ${perspY}px`;
            self.el.style.perspectiveOrigin = `50% ${perspY}px`;

            self._checkTotalRendered();

            if (self.options.minDuration && self.options.maxDuration) {
              const randDuration = `${Math.random() *
                (self.options.maxDuration - self.options.minDuration) +
                self.options.minDuration}s`;
              el.style.WebkitAnimationDuration = randDuration;
              el.style.MozAnimationDuration = randDuration;
              el.style.animationDuration = randDuration;
            }

            classie.add(el, "animate");
          }, 25);
        }
      });
      this.didScroll = false;
    },
    _resizeHandler() {
      const self = this;
      function delayed() {
        self._scrollPage();
        self.resizeTimeout = null;
      }
      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
      }
      this.resizeTimeout = setTimeout(delayed, 1000);
    },
    _checkTotalRendered() {
      ++this.itemsRenderedCount;
      if (this.itemsRenderedCount === this.itemsCount) {
        window.removeEventListener("scroll", this._onScrollFn);
      }
    }
  };

  // add to global namespace
  window.AnimOnScroll = AnimOnScroll;
})(window);
