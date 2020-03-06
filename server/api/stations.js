const router = require('express').Router()
const {Station} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const stations = await Station.findAll({
      attributes: ['id', 'name', 'line', 'coordinates']
    })
    res.json(stations)
  } catch (err) {
    next(err)
  }
})

router.get('/:station', async (req, res, next) => {
  try {
    console.log('params', req.params)
    const station = await Station.findOne({
      where: {
        name: req.params.station
      }
    })
    console.log('estacionnnnn', station)
    res.send(station)
  } catch (err) {
    next(err)
  }
})
