import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getRides} from '../store'
import PastRide from './past-ride'
import Chat from './chat'

/**
 * COMPONENT
 */
class UserHome extends React.Component {
  constructor() {
    super()

    this.state = {
      showMenu: false
    }
    this.showMenu = this.showMenu.bind(this)
  }

  componentDidMount() {
    this.props.getRides(this.props.id)
  }
  showMenu(event) {
    this.setState({
      ...this.state,
      showMenu: !this.state.showMenu
    })
  }
  render() {
    let email = this.props.email
    return (
      <div className="userHome">
        <h3 className="header">
          Welcome,
          {email}
        </h3>

        <h2 className="actionRoot">I want to:</h2>
        <div className="actions">
          <Link to="/ride">Get a Ride</Link>
          <Link to="/swipe">Give a Swipe</Link>
        </div>
        <br />
        {/* <div className="actionRoot">My previous Rides</div> */}
        <div />
        {/* <Chat /> */}
        <button className="select" onClick={this.showMenu}>
          {this.state.showMenu ? 'Hide' : 'Show'} my previous rides
        </button>
        {this.state.showMenu ? (
          <div className="menu">
            {this.props.rides
              .slice(0)
              .reverse()
              .map(ride => (
                <div className="userHistory" key={ride.id}>
                  <PastRide ride={ride} userId={this.props.id} />
                </div>
              ))}
          </div>
        ) : null}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => ({
  email: state.user.email,
  id: state.user.id,
  rides: state.ride.rides
})

const mapDispatch = dispatch => ({
  getRides: userId => dispatch(getRides(userId))
})

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
