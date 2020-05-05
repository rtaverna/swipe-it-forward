import React from "react";

const PastRide = props => {
  const { ride } = props;
  console.log("props", props);
  return (
    <div>{ride.createdAt}</div>
      
  );
};
export default PastRide;
