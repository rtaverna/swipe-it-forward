import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PastRide = props => {
  return (
    <div className="pastRide">
      Your ride with User{" "}
      {props.ride.swiper === props.userId
        ? props.ride.rider
        : props.ride.swiper}{" "}
      at {props.ride.destination} on {props.ride.createdAt.slice(0, 10)}{" "}
    </div>
  );
};
export default PastRide;
