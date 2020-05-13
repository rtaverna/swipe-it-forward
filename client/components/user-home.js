import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {getRides} from "../store"
import PastRide from "./past-ride"

/**
 * COMPONENT
 */
class UserHome extends React.Component {
  constructor()  {
    super()

  }

  componentDidMount() {
      this.props.getRides(this.props.id)
  }

  render()  {
    let email = this.props.email
    console.log('rides',this.props.rides)
    return (
    <div className="body">
      <h3 className="header">
        Welcome,
        {email}
      </h3>

      <h2 className="actionRoot">Today I want to:</h2>
      <div className="actions">
        <Link to="/ride">Ride</Link>
        <Link to="/swipe">Swipe</Link>
      </div>
      <br></br>
      <div className="actionRoot">My previous Rides</div>
      <div className="historyBlock">{this.props.rides.map(ride => (<div className="userHistory" key={ride.id}><PastRide ride={ride} /></div>))}</div>
    </div>
  );
  }
};

/**
 * CONTAINER
 */
const mapState = state => ({
  email: state.user.email,
  id: state.user.id,
  rides: state.ride.rides
});

const mapDispatch = dispatch => ({
  getRides: userId  => dispatch(getRides(userId))

})

export default connect(mapState,mapDispatch)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
};
