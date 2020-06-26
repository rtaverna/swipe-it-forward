# swipe-it-forward

This is a web application built with React, Redux, Node.js, Express, Javascript, Sequelize and PostgreSQL. It gives generous New Yorkers a platform to donate a subway ride, or "swipe", to a their neighbors in need. The subway is the circulatory system of NYC. It is integral to every aspect of the city, but as living costs skyrocket, subway fares are becoming prohibitive for many. The most cost affective way to pay for the subway is an unlimited monthly metrocard. However, this requires access to a relatively large ($125/month) lump sum of cash. Those who do not have this are those forced to pay ride-by-ride ($2.75/ride) - effectively charging those with the least purchasing power the most for public transportation. Here is a discrete way for commuters to share their monthly passes at no extra cost to themselves.  People helping people. 

It's deployed [here](https://serene-atoll-39059.herokuapp.com/)


## Setup

1. Install

```
npm install 
```

2. Create and seed the database

```
createdb Stackathon
npm run seed
```

3. Run 

```
npm run start-dev 
```

## Dependencies
Please create a secrets folder in the root:
```
process.env.GOOGLE_MAPS_API = "Enter API Key Here"

```

[Google Maps React](https://github.com/fullstackreact/google-maps-react#readme)
Used to find and display user locations. 



## Usage

Users can: 
1. Sign Up
2. View their past activity
3. Volunteer a Ride
4. Request a Ride 
5. Explore resources related to mutual aid across NYC


