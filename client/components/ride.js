import React from "react";
import { connect } from "react-redux";
import { getStations, findRide, getLocation } from "../store";
import {Map, GoogleApiWrapper, Marker} from "google-maps-react";


class Ride extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      departure: null,
      leaving: '',
      latitude: null,
      longitude: null,
      address: null,
    };

    this.showMenu = this.showMenu.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  componentDidMount() {
    this.props.getStations();
  }

  showMenu(event) {
    event.preventDefault()
    this.setState({
      ...this.state,
      showMenu: true
    });
  }

  handleSelect() {
    event.preventDefault()
    this.setState({
      ...this.state,
      showMenu: false,
      departure: event.target.value
    });
  }

  handleChange() {
    event.preventDefault()
    this.setState({
      leaving: event.target.value
    });
  }

  handleSubmit() {
    event.preventDefault()
    this.props.findRide({
      departure: this.state.departure,
      leaving: this.state.leaving
    });
    const station = this.state.departure;
    this.props.getLocation(station);
  }



  // eslint-disable-next-line complexity
  render() {
    if (this.props.location.id) {
      console.log('renderprops',this.props)
      const long = Number(this.props.location.coordinates.slice(7, 14));
      const lat = Number(this.props.location.coordinates.slice(26, 33));
      let center = {lat: lat, lng: long}
      return (
        <div className="riderConf">
          {this.props.ride.data.swiper ? (<div>Look out for {this.props.ride.data.swiper} around {this.props.ride.arrival} at {this.props.location.name} </div>):
        (<div>Please wait while we match you with a swiper at {this.props.location.name}!</div>)}
        <Map
          
          google={this.props.google}
          initialCenter={center}
          style={style}
          zoom={12}>
            <Marker
              name={'Your position'}
              position={center}
            />
        </Map>
        </div>
        )
    }
       
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="station">
          <div className="input">Departing From:</div>
        <div />
        <button className="select" onClick={this.showMenu}>
          {this.state.departure ? this.state.departure : "Select"}
        </button>
        {this.state.showMenu ? (
          <div className="menu">
            {this.props.stations.map(station => (
              <li key={station.id} onClick={this.handleSelect}>
                  <button value={station.name}>{station.name}</button>
              </li>))
            }
          </div>) : null
        }
        </div>
        <div className="time">
        <div>Desired Departure Time:</div>
        <input
          type="time"
          name="arrival"
          className="textinput"
          onChange={this.handleChange}
          value={this.state.leaving}
        />
        <br></br>
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
    );
  }
}

const mapStateToProps = state => ({
  stations: state.station.stations,
  ride: state.ride.ride,
  location: state.station.location
});

const mapDispatchToProps = dispatch => ({
  getStations: () => dispatch(getStations()),
  findRide: obj => dispatch(findRide(obj)),
  getLocation: station => dispatch(getLocation(station))
});

const style = {
  width: '50%',
  height: '50%',
  position: 'relative',
  top: '50px',
  display: 'inline-block',
	overflow: 'hidden'
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDwcYwKvqD8B5m1p09e1LKdq3yaVqkn5mA"})(connect(mapStateToProps, mapDispatchToProps)(Ride))


