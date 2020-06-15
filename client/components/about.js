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

      {/* <b>
        {" "}
        Welcome to Swipe It Forward, the first free ride sharing service for New
        Yorkers. We function by connecting generous owners of unlimited
        metrocards with those who cannot afford the subway. Unlimited Metrocards
        can be (legally!) swiped as many times as you want, and there is NO RULE
        AGAINST sharing them. However, their $135/month pricetag can be quite
        prohibitive. The MTA has recently stepped up their fave evasion
        enforcement. This has been heavily criticized as being too forceful, as
        well as discriminatory. Making an account with us offers you the
        opportunity to either offer free rides to those in need, or request them
        yourself. Swipe it Forward!
      </b> */}
    </div>
  </div>
)

export default about

{
  /* {/* <div>
        <img src="https://cdn.vox-cdn.com/thumbor/UlNINbSDs2keGxrZPcUYw5yBD-8=/0x0:3100x2067/920x613/filters:focal(1955x161:2451x657):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65646157/1179423166.jpg.0.jpg" />
        <img src="https://dazedimg-dazedgroup.netdna-ssl.com/696/azure/dazed-prod/1270/9/1279155.jpg" />
        <img src="https://www.aljazeera.com/mritems/imagecache/mbdxxlarge/mritems/Images/2019/12/6/8e7b90cba5ac459f92ad87b7ff08b783_18.jpg" />
      </div>
      <div>
        <div >Learn More</div>
        <div>
          If you want to know more about our cause and what else you can do to
          help, check out these resources below:
        </div>

        <div>
          <a href="https://www.thedailybeast.com/behind-the-subway-arrests-controversy-roiling-new-york-city">
            Fare Evasion Arrests up 50%
          </a>
        </div>
        <div>
          <a href="https://www.nyclu.org/en/know-your-rights/what-do-if-youre-stopped-police">
            Know Your Rights
          </a>
        </div>
        <div>
          <a href="https://www1.nyc.gov/site/fairfares/index.page">
            Half Price rides for Low Income New Yorkers
          </a>
        </div>
        <div>
          <a href="https://nyc.streetsblog.org/2019/11/14/mta-will-spend-249m-on-new-cops-to-save-200m-on-fare-evasion/">
            MTA Will Spend $249M On New Cops to Save $200M on Fare Evasion
          </a>
        </div>
        <div>
          <a href="https://www.wnyc.org/story/can-i-get-swipe-can-we-get-trouble/">
            FAQ: Legality
          </a>
        </div>
      </div>
      </div> */
}

//   <textarea className="text">
//   Welcome to Swipe It Forward, the first free ride sharing service for New
//   Yorkers. We function by connecting generous owners of unlimited
//   metrocards with those who cannot afford the subway. Unlimited Metrocards
//   can be (legally!) swiped as many times as you want, and there is NO RULE
//   AGAINST sharing them. However, their $135/month pricetag can be quite
//   prohibitive. The MTA has recently stepped up their fave evasion
//   enforcement. This has been heavily criticized as being too forceful, as
//   well as discriminatory. Making an account with us offers you the
//   opportunity to either offer free rides to those in need, or request them
//   yourself. Swipe it Forward!
// </textarea>\
// {/* <div className="card sidebar">

//         <div className="subtitle">Learn More</div>

//              */}
//                     {/* <a className="card-list-item"href="https://www.thedailybeast.com/behind-the-subway-arrests-controversy-roiling-new-york-city">
//                         Fare Evasion Arrests up 50%
//                     </a>

//                     <a className="card-list-item"href="https://www.nyclu.org/en/know-your-rights/what-do-if-youre-stopped-police">
//                         Know Your Rights
//                     </a>

//                     <a className="card-list-item"href="https://www1.nyc.gov/site/fairfares/index.page">
//                         Half Price rides for Low Income New Yorkers
//                     </a>

//                     <a className="card-list-item"href="https://nyc.streetsblog.org/2019/11/14/mta-will-spend-249m-on-new-cops-to-save-200m-on-fare-evasion/">
//                         MTA Will Spend $249M On New Cops to Save $200M on Fare Evasion
//                     </a>

//                     <a className="card-list-item"href="https://www.wnyc.org/story/can-i-get-swipe-can-we-get-trouble/">
//                         FAQ: Legality
//                     </a> */}

//         {/* </div> */}
