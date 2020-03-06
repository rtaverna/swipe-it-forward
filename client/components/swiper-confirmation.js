import React from 'react'

const SwiperConfirmation = props => {
  const {ride} = props
  console.log('props', props)
  return (
    <div className="rideConf">
      <div className="confirmationTitle">
        Thank you for helping out a fellow New Yorker!
      </div>
      <div className="rideInfo">Ride Info:</div>
      <div className="rideInfo">
        Please look out for User {props.ride.data.rider} at{' '}
        {props.ride.data.destination} around {props.ride.data.arrival}
      </div>
    </div>
  )
}
export default SwiperConfirmation
