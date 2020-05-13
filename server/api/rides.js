const router = require("express").Router();
const { Op } = require("sequelize");
const { Ride, Station } = require("../db/models");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const rides = await Ride.findAll({
      // include: [{
      //   model: Station
      // }]
    });

    res.send(rides);
  } catch (err) {
    next(err);
  }
});

router.get("/:userId", async (req, res, next) => {
  try {
    const rides = await Ride.findAll({
      where: {
        [Op.or]: [{ swiper: req.params.userId }, { rider: req.params.userId }]
      }
    });
    console.log("rideshere", rides);
    res.send(rides);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    console.log("reqbody", req.body);
    const station = await Station.findOne({
      where: {
        name: req.body.destination
      }
    });
    console.log("statuin", station);
    console.log("newre?", req.body);

    let ride = await Ride.findOne({
      where: {
        swiper: null,
        destination: req.body.destination,
        arrival: req.body.arrival
      }
      // },include:  [{
      //   model: Station
      // }]
    });
    console.log("???");
    if (ride) {
      console.log("rideexist", ride);

      ride.swiper = req.session.passport.user;
      ride.stationId = station.id;
      ride.save();
      res.status(200).send(ride);
    } else {
      ride = await Ride.create({
        swiper: req.session.passport.user,
        destination: req.body.destination,
        arrival: req.body.arrival,
        stationId: station.id
      });
      res.status(201).send(ride);
    }
  } catch (error) {
    console.error(error);
  }
});

router.put("/", async (req, res, next) => {
  try {
    const station = await Station.findOne({
      where: {
        name: req.body.departure
      }
    });
    console.log("station?:", station);

    let ride = await Ride.findOne({
      where: {
        rider: null,
        destination: req.body.departure,
        arrival: req.body.leaving
      }
    });
    if (ride) {
      ride.rider = req.session.passport.user;
      ride.stationId = station.id;
      ride.save();
      res.status(200).send(ride);
    } else {
      ride = await Ride.create({
        destination: req.body.departure,
        arrival: req.body.leaving,
        rider: req.session.passport.user,
        stationId: station.id
      });
      res.status(201).send(ride);
    }
  } catch (error) {
    console.error(error);
  }
});
