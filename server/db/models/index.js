const User = require("./user");
const Station = require("./stations");
const Ride = require("./rides");

// Ride.belongsTo(User,)
// User.hasOne(Ride)

Ride.belongsTo(Station);
Station.hasMany(Ride);

module.exports = {
  User,
  Station,
  Ride
};
