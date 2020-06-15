import axios from 'axios'

const GOT_STATIONS = 'GOT_STATIONS'
const GOT_LOCATION = 'GOT_LOCATION'

const initialState = {
  stations: [],
  ride: {},
  location: {}
}

const gotStations = stations => ({type: GOT_STATIONS, stations})
const gotLocation = location => ({type: GOT_LOCATION, location})

export const getStations = () => async dispatch => {
  try {
    const stations = await axios.get('/api/stations')
    dispatch(gotStations(stations.data))
  } catch (error) {
    console.error(error)
  }
}

export const getLocation = station => async dispatch => {
  try {
    const {data} = await axios.get(`api/stations/${station}`)

    dispatch(gotLocation(data))
  } catch (error) {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_STATIONS:
      return {...state, stations: action.stations}
    case GOT_LOCATION:
      return {...state, location: action.location}
    default:
      return state
  }
}
