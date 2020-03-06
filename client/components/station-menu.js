import React from 'react'

// const StationMenu = props =>  {
//     return(
//       <div className='menu'>

//           {props.stations.map(station => <li key={station.id}><button>{station.name}</button></li>)}

//       </div>
//     )
//   }

//   export default StationMenu

class StationMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showMenu: false
    }

    this.showMenu = this.showMenu.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  showMenu(event) {
    event.preventDefault()

    this.setState({
      showMenu: true,
      arrival: undefined
    })
  }

  handleSelect(event) {
    this.setState({showMenu: false, destination: event.target.value})
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      arrival: event.target.value
    })
  }

  render() {
    console.log('local state', this.state)
    return (
      <div>
        <div>Destination:</div>
        <button onClick={this.showMenu}>
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
        <div>ETA:</div>
        <input
          type="time"
          name="arrival"
          onChange={this.handleChange}
          value={this.state.arrival}
        />
      </div>
    )
  }
}

export default StationMenu
