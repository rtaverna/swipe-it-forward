import React from 'react'

const about = () => (
  <div className="about">
    <h1 className="aboutTitle">About</h1>
    <div className="aboutContent">
      <a
        className="firstContentBlock"
        href="https://www.teenvogue.com/story/mta-protests-new-york-city-ftp"
      >
        <img
          src="https://assets.teenvogue.com/photos/5e3b0a30407fe40008ad8d0c/master/pass/GettyImages-1179423171.jpg"
          height="1000"
          width="2500"
        />
      </a>

      <div>
        <h2>People Helping People</h2>
        <div className="infoBox">
          For many New Yorkers, the subway system is the only way to navigate
          the city. The most cost-effective way to pay for the subway is an
          unlimited monthly pass, priced at around $120. Unfortunately, this
          lump sum is out of reach for many, and leaves those priced out paying
          2.75 per ride. This app allows riders to donate their unlimited swipes
          to help out their neighbors, and keep NYC a viable home for all.
        </div>
      </div>

      <a href="https://www.wbur.org/hereandnow/2019/12/19/nyc-increased-subway-policing-protests">
        <img
          src="https://s7d2.scene7.com/is/image/TWCNews/bk_nypd_protest_bettervo110119109383945549png"
          height="1000"
          width="6000"
        />
      </a>
      <div>
        <h2>Offsetting disproportionate harm</h2>
        <div className="infoBox">
          "Fare evasion enforcement by the police is more commonplace at MTA
          subway stations located in the city’s high-poverty communities. Not
          surprisingly, fare evasion enforcement actions are more likely to take
          the form of arrests instead of summonses in high-poverty neighborhoods
          that are predominantly black and Latinx compared to white
          neighborhoods" <br />
          <a
            className="quoteCitation"
            href="https://www.cssny.org/news/entry/findings-from-new-css-analysis-show-racial-disparities-in-fare-evasion-enfo"
          >
            {' '}
            - Findings from a Community Service Society (CSS) analysis of recent
            fata obtained from the NYPD
          </a>
        </div>
      </div>
      <a href="https://neweconomy.net/blog/new-economy-round-mutual-aid-peoplesbailout-just-covid-19-recovery">
        <img
          src="https://lh5.googleusercontent.com/78AoRJaXKMovpeWYOR7f3Y1bezZgK7x85o2I5rMr40KddpvcddmsueEMOw92v89MNOjEReNk0XA5CDe0pKRlEPHZ9vY31yhzKybVvD9i-NMIlYYUuAoWkMTOcbt_xfJL2E0KZlym"
          height="1000"
          width="6000"
        />
      </a>
      <div>
        <h2>Further Resources</h2>
        <div className="infoBox">
          <a href="https://www.nyclu.org/en/know-your-rights/what-do-if-youre-stopped-police">
            Know Your Rights: Click here for a comprehensive guide on what to do
            if you're stopped by the police.
          </a>
          <br />
          <a href="https://www1.nyc.gov/site/fairfares/index.page">
            Half Price rides for Low Income New Yorkers - Find out if you
            qualify<br />
          </a>
          <br />
        </div>
      </div>
    </div>
  </div>
)

export default about
