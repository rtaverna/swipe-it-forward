import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
const UserHome = props => {
  const { email } = props;

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
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = state => ({
  email: state.user.email
});

export default connect(mapState)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
};
