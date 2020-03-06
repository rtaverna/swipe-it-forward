import React from 'react'
import {connect} from 'react-redux'
import {getStations, getRide} from '../store'
import SwiperConfirmation from './swiper-confirmation'

class Swipe extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showMenu: false,
      trip: {}
    }

    this.showMenu = this.showMenu.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getStations()
  }

  showMenu(event) {
    this.setState({
      ...this.state,
      showMenu: true
    })
  }

  handleSelect() {
    this.setState({
      ...this.state,
      showMenu: false,
      destination: event.target.value
    })
  }

  handleChange() {
    this.setState({
      ...this.state,
      arrival: event.target.value
    })
  }

  handleSubmit(evt) {
    console.log('event.target', evt.target.value.destination)
    this.props.getRide({
      destination: this.state.destination,
      arrival: this.state.arrival
    })
  }

  // eslint-disable-next-line complexity
  render() {
    console.log('props', this.props)
    if (this.props.ride.ride.data) {
      if (this.props.ride.ride.data.rider) {
        return <SwiperConfirmation ride={this.props.ride.ride} />
      } else {
        return <div>Please be patient while we match you with a rider!</div>
      }
    } else
      return (
        <div>
          <div className="station">
            <div className="input">Destination:</div>
            <button className="select" onClick={this.showMenu}>
              {this.state.destination ? this.state.destination : 'Select'}
            </button>
            {this.state.showMenu ? (
              <div className="menu">
                {this.props.stations.map(station => (
                  <li key={station.id} onClick={this.handleSelect}>
                    <button value={station.name}>{station.name}</button>
                  </li>
                ))}
              </div>
            ) : null}
          </div>
          <div className="time">
            <div>ETA:</div>
            <input
              type="time"
              name="arrival"
              className="textinput"
              onChange={this.handleChange}
              value={this.state.arrival}
            />

            <button
              className="submitButton"
              station={this.state.destination}
              value={{
                destination: this.state.destination,
                arrival: this.state.arrival
              }}
              onClick={this.handleSubmit}
            >
              Match me With a Rider!
            </button>
          </div>
        </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    stations: state.station.stations,
    ride: state.ride
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getStations: () => dispatch(getStations()),
    getRide: obj => dispatch(getRide(obj))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Swipe)
