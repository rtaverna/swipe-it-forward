import React from 'react'

const about = () => (
  <div className="containment">
    <h1 className="title">About</h1>
    <div className="content">
      <div id="accordion">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Resources
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            className="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="card-body">
              <a href="https://www.nyclu.org/en/know-your-rights/what-do-if-youre-stopped-police">
                Know Your Rights
              </a>
              <br />

              <a href="https://www1.nyc.gov/site/fairfares/index.page">
                Half Price rides for Low Income New Yorkers
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                News
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordion"
          >
            <div className="card-body">
              <a
                className="card-list-item"
                href="https://www.thedailybeast.com/behind-the-subway-arrests-controversy-roiling-new-york-city"
              >
                Fare Evasion Arrests up 50%
              </a>
              <br />
              <a
                className="card-list-item"
                href="https://nyc.streetsblog.org/2019/11/14/mta-will-spend-249m-on-new-cops-to-save-200m-on-fare-evasion/"
              >
                Exorbitant MTA spending
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                FAQ
              </button>
            </h5>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordion"
          >
            <div className="card-body">
              <a
                className="card-list-item"
                href="https://www.wnyc.org/story/can-i-get-swipe-can-we-get-trouble/"
              >
                Is it legal to use this app?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default about
