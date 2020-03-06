import React from "react";
import { connect } from "react-redux";
import { getStations, findRide, getLocation } from "../store";
import RiderConfirmation from "./rider-confirmation";

class Ride extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      ride: {}
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
    this.setState({
      ...this.state,
      showMenu: true
    });
  }

  handleSelect() {
    this.setState({
      ...this.state,
      showMenu: false,
      departure: event.target.value
    });
  }

  handleChange() {
    this.setState({
      ...this.state,
      leaving: event.target.value
    });
  }

  handleSubmit() {
    this.props.findRide({
      departure: this.state.departure,
      leaving: this.state.leaving
    });
    // const stationId = Number(this.props.ride.ride.data.stationId)
    const station = this.state.departure;
    console.log("station were getting", station);
    this.props.getLocation(station);
  }

  // eslint-disable-next-line complexity
  render() {
    console.log("props", this.props);
    console.log("localstate", this.state);
    if (this.props.ride.ride.data) {
      if (this.props.ride.ride.data.swiper) {
        return (
          <RiderConfirmation
            ride={this.props.ride.ride}
            location={this.props.location}
          />
        );
      }
      return <div>Please be patient while we match you with a swiper!</div>;
    }
    return (
      <div>
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
                </li>
              ))}
            </div>
          ) : null}
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

          <button
            className="submitButton"
            station={this.state.departure}
            value={{
              departure: this.state.departure,
              leaving: this.state.leaving
            }}
            onClick={this.handleSubmit}
          >
            Match me With a Swiper!
          </button>
        </div>
        {/* <div>{this.props.ride.ride.data ? (<div>{this.props.ride.ride.status}</div>) :(<div>{null}</div>)}</div> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stations: state.station.stations,
  ride: state.ride,
  location: state.station.location
});

const mapDispatchToProps = dispatch => ({
  getStations: () => dispatch(getStations()),
  findRide: obj => dispatch(findRide(obj)),
  getLocation: station => dispatch(getLocation(station))
});
export default connect(mapStateToProps, mapDispatchToProps)(Ride);
