const Sequelize = require("sequelize");
const db = require("../db");
const Station = require("./stations");

const Ride = db.define("ride", {
  swiper: Sequelize.INTEGER,
  destination: {
    type: Sequelize.STRING,
    allowNull: false
  },
  arrival: {
    type: Sequelize.TIME,
    allowNull: false
  },
  rider: {
    type: Sequelize.INTEGER,
    defaultValue: null
  }
  // stationId:  {
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: Station,
  //     key: 'id'
  //  }
  // }
});

module.exports = Ride;
