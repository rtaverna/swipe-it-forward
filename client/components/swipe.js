import React from 'react'
import {connect} from 'react-redux'
import {getStations, getRide, getLocation} from '../store'
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'
import ReactLoading from 'react-loading'
import Select from 'react-select'

import SwiperConfirmation from './swiper-confirmation'
class Swipe extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showMenu: false,
      arrival: '',
      destination: null,
      latitude: null,
      longitude: null
    }

    this.showMenu = this.showMenu.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getStations()
  }

  showMenu(event) {
    event.preventDefault()
    this.setState({
      ...this.state,
      showMenu: true
    })
  }

  handleSelect() {
    event.preventDefault()
    this.setState({
      ...this.state,
      showMenu: false,
      destination: event.target.value
    })
  }

  handleChange() {
    event.preventDefault()
    this.setState({
      destination: event.target.textContent
    })
  }

  handleTimeChange() {
    event.preventDefault()
    this.setState({
      arrival: event.target.value
    })
  }

  handleSubmit() {
    event.preventDefault()
    this.props.getRide({
      destination: this.state.destination,
      arrival: this.state.arrival
    })

    const station = this.state.destination
    this.props.getLocation(station)
  }

  // eslint-disable-next-line complexity
  render() {
    let stationNames = this.props.stations.map(station => {
      return {value: station.name, label: station.name}
    })

    if (this.props.location.id && this.props.ride.data) {
      const long = Number(this.props.location.coordinates.slice(7, 14))
      const lat = Number(this.props.location.coordinates.slice(26, 33))
      let center = {lat: lat, lng: long}
      return (
        <div className="riderConf">
          {this.props.ride.data.rider ? (
            <div>
              Look out for {this.props.ride.data.rider} around{' '}
              {this.props.ride.data.arrival} at {this.props.location.name}{' '}
              <div>
                <Map
                  google={this.props.google}
                  initialCenter={center}
                  style={style}
                  zoom={12}
                >
                  <Marker name={'Your position'} position={center} />
                </Map>
              </div>
            </div>
          ) : (
            <div>
              Please wait while we match you with a rider at{' '}
              {this.props.location.name}!
              <ReactLoading
                type={'spinningBubbles'}
                color={'#007bff'}
                height={667}
                width={375}
              />
            </div>
          )}
        </div>
      )
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="station">
          <div className="input">Destination:</div>
          <div>
            <Select
              options={stationNames}
              onChange={this.handleChange}
              openMenuOnClick={false}
              style={styleSearch}
            />
          </div>
        </div>

        <div className="time">
          <div>ETA:</div>
          <input
            type="time"
            name="arrival"
            className="textinput"
            onChange={this.handleTimeChange}
            value={this.state.arrival}
          />
          <br />
          <button
            className="submitButton"
            station={this.state.destination}
            value={{
              destination: this.state.destination,
              arrival: this.state.arrival
            }}
          >
            Match me With a Rider!
          </button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  stations: state.station.stations,
  ride: state.ride.ride,
  location: state.station.location
})

const mapDispatchToProps = dispatch => ({
  getStations: () => dispatch(getStations()),
  getRide: obj => dispatch(getRide(obj)),
  getLocation: station => dispatch(getLocation(station))
})

const style = {
  width: '50%',
  height: '50%',
  position: 'relative',
  top: '50px',
  display: 'inline-block',
  overflow: 'hidden'
}
const styleSearch = {
  width: '10%'
}
export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAPS_API
})(connect(mapStateToProps, mapDispatchToProps)(Swipe))
