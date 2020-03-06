import React from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react'

const RiderConfirmation = props => {
  const {ride, location} = props
  console.log('props', props)
  console.log(
    'props.location.data.coordinates',
    props.location.data.coordinates
  )
  const long = Number(props.location.data.coordinates.slice(7, 14))
  const lat = Number(props.location.data.coordinates.slice(26, 34))

  console.log('lat,long', lat, long)

  return (
    <div className="rideConf">
      <div className="confirmationTitle">Thank you for riding with us!</div>
      <div className="rideInfo">Ride Info:</div>
      <div className="rideInfo">
        Please look out for User {props.ride.data.rider} at{' '}
        {props.ride.data.destination} around {props.ride.data.arrival}
      </div>
      <div className="map">
        <Map
          google={props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{lat: lat, lng: long}}
        />
      </div>
    </div>
    // <div className='confirmationtext'>Thank you for riding with us!

    //   <div >Please look out for User {props.ride.data.swiper} at {props.ride.data.destination} around {props.ride.data.arrival}</div>
    //
    // </div>
  )
}

const mapStyles = {
  width: '50%',
  height: '50%'
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDwcYwKvqD8B5m1p09e1LKdq3yaVqkn5mA'
})(RiderConfirmation)
