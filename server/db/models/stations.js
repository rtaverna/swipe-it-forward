'use strict'

const Sequelize = require('sequelize')
const db = require('../db')

const Station = db.define('station', {
  name: {
    type: Sequelize.STRING
  },
  line: Sequelize.STRING,
  schedule: Sequelize.STRING,
  coordinates: {
    type: Sequelize.STRING
  }
})

module.exports = Station
