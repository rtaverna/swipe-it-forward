import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  UserHome,
  Swipe,
  Ride,
  RiderConfirmation,
  Home,
  About
} from './components'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/about" component={About} />

        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}

            <Route path="/home" component={UserHome} />
            <Route exact path="/ride" component={Ride} />
            <Route path="/swipe" component={Swipe} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Home} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => ({
  isLoggedIn: !!state.user.id
})

const mapDispatch = dispatch => ({
  loadInitialData() {
    dispatch(me())
  }
})

export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
