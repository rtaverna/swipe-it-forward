const router = require('express').Router()
const {Op} = require('sequelize')
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

router.get('/:userId', async (req, res, next) => {
  try {
    const rides = await Ride.findAll({
      where: {
        [Op.or]: [{swiper: req.params.userId}, {rider: req.params.userId}]
      }
    })
    res.send(rides)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const station = await Station.findOne({
      where: {
        name: req.body.destination
      }
    })
    let ride = await Ride.findOne({
      //search for an existing ride in need of a swiper
      where: {
        swiper: null,
        destination: req.body.destination,
        arrival: req.body.arrival
      }
    })
    //if found, we can just assign current user to be swiper, and send back updated ride
    if (ride) {
      console.log('found ride!', ride)
      ride.swiper = req.session.passport.user
      ride.stationId = station.id
      ride.save()
      res.status(200).send(ride)
    } else {
      //if no such ride was found, lets check if we have already created the instance with given swiper
      ride = await Ride.findOne({
        where: {
          swiper: req.session.passport.user,
          destination: req.body.destination,
          arrival: req.body.arrival
        }
      })
      //if found, send ride
      if (ride) {
        console.log('new ride already created', ride)
        res.status(201).send('Loading')
        // res.status(200).send(ride)
      } else {
        //if not, create it
        ride = await Ride.create({
          swiper: req.session.passport.user,
          destination: req.body.destination,
          arrival: req.body.arrival,
          stationId: station.id
        })
        console.log('didnt find, made new', ride)
        res.status(201).send('Loading')
      }
    }
  } catch (error) {
    console.error(error)
  }
})

router.post('/ride', async (req, res, next) => {
  try {
    const station = await Station.findOne({
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
      ride = await Ride.findOne({
        where: {
          rider: req.session.passport.user,
          destination: req.body.departure,
          arrival: req.body.leaving
        }
      })

      if (ride) {
        res.status(201).send('Loading')
        // res.status(200).send(ride)
      } else {
        ride = await Ride.create({
          destination: req.body.departure,
          arrival: req.body.leaving,
          rider: req.session.passport.user,
          stationId: station.id
        })
        res.status(201).send('Loading')
      }
    }
    // res.status(201).send(ride);
  } catch (error) {
    console.error(error)
  }
})
