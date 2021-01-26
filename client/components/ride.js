import React from 'react'
import {connect} from 'react-redux'
import {getStations, findRide, getLocation} from '../store'
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'
import ReactLoading from 'react-loading'
import Select from 'react-select'

class Ride extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showMenu: false,
      departure: null,
      leaving: 12,
      latitude: null,
      longitude: null,
      address: null
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
      departure: event.target.value
    })
  }

  handleChange() {
    event.preventDefault()

    this.setState({
      departure: event.target.textContent
    })
  }
  handleTimeChange() {
    event.preventDefault()
    this.setState({
      leaving: event.target.value
    })
  }

  handleSubmit() {
    event.preventDefault()
    this.props.findRide({
      departure: this.state.departure,
      leaving: this.state.leaving
    })

    const station = this.state.departure
    this.props.getLocation(station)
  }

  render() {
    let stationNames = this.props.stations.map(station => {
      return {value: station.name, label: station.name}
    })
    if (this.props.ride.data && this.props.location.id) {
      const long = Number(this.props.location.coordinates.slice(7, 14))
      const lat = Number(this.props.location.coordinates.slice(26, 33))
      let center = {lat: lat, lng: long}
      return (
        <div className="riderConf">
          {this.props.ride.data.swiper ? (
            <div>
              Look out for {this.props.ride.data.swiper} around{' '}
              {this.props.ride.arrival} at {this.props.location.name}{' '}
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
              Please wait while we match you with a swiper at{' '}
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
          <div className="input">Departing From:</div>

          <div>
            <Select
              options={stationNames}
              onChange={this.handleChange}
              openMenuOnClick={false}
              style={styleSearch}
            />
          </div>
          <div />
        </div>
        <div className="time">
          <div>Desired Departure Time:</div>
          <input
            type="time"
            name="arrival"
            className="textinput"
            onChange={this.handleTimeChange}
            value={this.state.leaving}
          />
          <br />
          <button
            className="submitButton"
            station={this.state.departure}
            value={{
              departure: this.state.departure,
              leaving: this.state.leaving
            }}
          >
            Match me With a Swiper!
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
  findRide: obj => dispatch(findRide(obj)),
  getLocation: station => dispatch(getLocation(station))
})

const style = {
  position: 'absolute',
  width: '50%',
  margin: 'auto',
  height: '40%',
  padding: '28%'
}
const styleSearch = {
  width: '10%'
}
export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAPS_API
})(connect(mapStateToProps, mapDispatchToProps)(Ride))
