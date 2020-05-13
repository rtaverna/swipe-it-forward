import React from "react";
import { render } from "enzyme";

const Home = () => (
  <div >
    <div className="about">
      <div>About</div>
      <div>
        Velcome to Swipe It Forward, the first free ride sharing service for New
        Yorkers. We function by connecting generous owners of unlimited
        metrocards with those who cannot afford the subway. Unlimited Metrocards
        can be (legally!) swiped as many times as you want, and there is NO RULE
        AGAINST sharing them. However, their $135/month pricetag can be quite
        prohibitive. The MTA has recently stepped up their fave evasion
        enforcement. This has been heavily criticized as being too forceful, as
        well as discriminatory. Making an account with us offers you the
        opportunity to either offer free rides to those in need, or request them
        yourself. Swipe it Forward!
      </div>
    </div>
    <div>
      <div >Learn More</div>
      <div>
        If you want to know more about our cause and what else you can do to
        help, check out these resources below:
      </div>
      <ul>
        <li>
          <a href="https://www.thedailybeast.com/behind-the-subway-arrests-controversy-roiling-new-york-city">
            Fare Evasion Arrests up 50%
          </a>
        </li>
        <li>
          <a href="https://www.nyclu.org/en/know-your-rights/what-do-if-youre-stopped-police">
            Know Your Rights
          </a>
        </li>
        <li>
          <a href="https://www1.nyc.gov/site/fairfares/index.page">
            Half Price rides for Low Income New Yorkers
          </a>
        </li>
        <li>
          <a href="https://nyc.streetsblog.org/2019/11/14/mta-will-spend-249m-on-new-cops-to-save-200m-on-fare-evasion/">
            MTA Will Spend $249M On New Cops to Save $200M on Fare Evasion
          </a>
        </li>
        <li>
          <a href="https://www.wnyc.org/story/can-i-get-swipe-can-we-get-trouble/">
            FAQ: Legality
          </a>
        </li>
      </ul>
    </div>
  </div>
);
export default Home;
