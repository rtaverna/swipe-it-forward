import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div className="pos-f-t">
    <div className="collapse" id="navbarToggleExternalContent">
      <div className="bg-dark p-4">
        <div className="navbar-nav">
          {isLoggedIn ? (
            <a className="nav-item nav-link" href="/home">
              Home
            </a>
          ) : (
            <div />
          )}
          {isLoggedIn ? (
            <a className="nav-item nav-link" href="#" onClick={handleClick}>
              Logout
            </a>
          ) : (
            <div />
          )}
          {isLoggedIn ? (
            <div />
          ) : (
            <a className="nav-item nav-link" href="/signup">
              Sign Up
            </a>
          )}
          {isLoggedIn ? (
            <div />
          ) : (
            <a className="nav-item nav-link" href="/login">
              Login
            </a>
          )}
          <a className="nav-item nav-link" href="/about">
            About
          </a>
        </div>
      </div>
    </div>
    <nav className="navbar navbar-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
    </nav>
  </div>
  // <div>

  // <nav class="navbar navbar-expand-lg">

  //   <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
  //     <div class="navbar-nav">
  //       {isLoggedIn ? (
  //         <a class="nav-item nav-link" href="/home">
  //           Home
  //         </a>
  //       ) : (
  //         <div />
  //       )}
  //       {isLoggedIn ? (
  //         <a class="nav-item nav-link" href="#" onClick={handleClick}>
  //           Logout
  //         </a>
  //       ) : (
  //         <div />
  //       )}
  //       {isLoggedIn ? (
  //         <div />
  //       ) : (
  //         <a class="nav-item nav-link" href="/signup">
  //           Sign Up
  //         </a>
  //       )}
  //       {isLoggedIn ? (
  //         <div />
  //       ) : (
  //         <a class="nav-item nav-link" href="/login">
  //           Login
  //         </a>
  //       )}
  //       <a class="nav-item nav-link" href="/about">
  //         About
  //       </a>
  //     </div>
  //   </div>
  // </nav>

  //  </div>
  // <nav class="navbar navbar-expand-lg">
  //   <a class="navbar-brand" href="#">
  //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  //       <span class="navbar-toggler-icon"></span>
  //     </button>

  //     <div class="collapse navbar-collapse" id="navbarNav">
  //     <img
  //       src="https://i.pinimg.com/originals/ac/68/19/ac6819074c09735e0841d67209d16710.jpg" width="60" height="50" class="d-inline-block align-top" alt=""
  //     />
  //     <h1>SWIPE IT FORWARD</h1>

  //       <ul class="navbar-nav">

  //       {isLoggedIn ? (
  //         <li>
  //           {/* The navbar will show these links after you log in */}
  //           <Link to="/home">Home</Link>
  //           <a href="#" onClick={handleClick}>
  //             Logout
  //           </a>
  //         </li>
  //       ) : (
  //         <li>
  //           {/* The navbar will show these links before you log in */}
  //           <Link to="/login">Login</Link>
  //           <Link to="/signup">Sign Up</Link>
  //         </li>
  //       )}
  //       </ul>
  //     </div>
  //   </a>

  // </nav>
);

/**
 * CONTAINER
 */
const mapState = state => ({
  isLoggedIn: !!state.user.id
});

const mapDispatch = dispatch => ({
  handleClick() {
    dispatch(logout());
  }
});

export default connect(mapState, mapDispatch)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
