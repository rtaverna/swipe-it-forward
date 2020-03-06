/* global $:false, jQuery:false, console:false */
(function($) {
  // scroll to top
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".scrollup").fadeIn();
    } else {
      $(".scrollup").fadeOut();
    }
  });
  $(".scrollup").click(() => {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      600
    );
    return false;
  });

  $(".accordion").on("show", e => {
    $(e.target)
      .prev(".accordion-heading")
      .find(".accordion-toggle")
      .addClass("active");
    $(e.target)
      .prev(".accordion-heading")
      .find(".accordion-toggle i")
      .removeClass("icon-plus");
    $(e.target)
      .prev(".accordion-heading")
      .find(".accordion-toggle i")
      .addClass("icon-minus");
  });

  $(".accordion").on("hide", function(e) {
    $(this)
      .find(".accordion-toggle")
      .not($(e.target))
      .removeClass("active");
    $(this)
      .find(".accordion-toggle i")
      .not($(e.target))
      .removeClass("icon-minus");
    $(this)
      .find(".accordion-toggle i")
      .not($(e.target))
      .addClass("icon-plus");
  });

  // navigation
  $(".navigation").onePageNav({
    begin() {
      console.log("start");
    },
    end() {
      console.log("stop");
    },
    scrollOffset: 0
  });

  // fancybox
  $(".fancybox").fancybox({
    padding: 0,
    autoResize: true,
    beforeShow() {
      this.title = $(this.element).attr("title");
      this.title =
        `<h4>${this.title}</h4>` +
        `<p>${$(this.element)
          .parent()
          .find("img")
          .attr("alt")}</p>`;
    },
    helpers: {
      title: {
        type: "inside"
      }
    }
  });

  $(".fancybox-media").fancybox({
    openEffect: "none",
    closeEffect: "none",
    helpers: {
      media: {}
    }
  });

  // nicescroll
  $("html").niceScroll({
    zindex: 999,
    cursorborder: "",
    cursorborderradius: "2px",
    cursorcolor: "#191919",
    cursoropacitymin: 0.5
  });

  function initNice() {
    if ($(window).innerWidth() <= 960) {
      $("html")
        .niceScroll()
        .remove();
    } else {
      $("html").niceScroll({
        zindex: 999,
        cursorborder: "",
        cursorborderradius: "2px",
        cursorcolor: "#191919",
        cursoropacitymin: 0.5
      });
    }
  }
  $(window).load(initNice);
  $(window).resize(initNice);
})(jQuery);

$(window).scroll(() => {
  if ($(window).scrollTop() < 10) {
    $(".fade")
      .stop(true, true)
      .fadeTo("slow", 1);
  } else {
    $(".fade")
      .stop(true, true)
      .fadeTo("slow", 0.33);
  }
});
