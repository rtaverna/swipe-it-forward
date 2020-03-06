const router = require('express').Router()
const {Ride, Station} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const rides = await Ride.findAll({
      // include: [{
      //   model: Station
      // }]
    })

    res.send(rides)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    let station = await Station.findOne({
      where: {
        name: req.body.destination
      }
    })
    let ride = await Ride.findOne({
      where: {
        swiper: null,
        destination: req.body.destination,
        arrival: req.body.arrival
        // include:  [{
        //   model: Station
        // }]
      }
    })
    if (ride) {
      ride.swiper = req.session.passport.user
      ride.stationId = station.id
      ride.save()
      res.status(200).send(ride)
    } else {
      ride = await Ride.create({
        swiper: req.session.passport.user,
        destination: req.body.destination,
        arrival: req.body.arrival,
        stationId: station.id
      })
      res.status(201).send(ride)
    }
  } catch (error) {
    console.error(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    let station = await Station.findOne({
      where: {
        name: req.body.departure
      }
    })

    let ride = await Ride.findOne({
      where: {
        rider: null,
        destination: req.body.departure,
        arrival: req.body.leaving
      }
    })
    if (ride) {
      ride.rider = req.session.passport.user
      ride.stationId = station.id
      ride.save()
      res.status(200).send(ride)
    } else {
      ride = await Ride.create({
        destination: req.body.departure,
        arrival: req.body.leaving,
        rider: req.session.passport.user,
        stationId: station.id
      })
      res.status(201).send(ride)
    }
  } catch (error) {
    console.error(error)
  }
})
