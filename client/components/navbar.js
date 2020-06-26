import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
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
)

/**
 * CONTAINER
 */
const mapState = state => ({
  isLoggedIn: !!state.user.id
})

const mapDispatch = dispatch => ({
  handleClick() {
    dispatch(logout())
  }
})

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
