import axios from "axios";

const GOT_RIDE = "GOT_RIDE";
const GOT_RIDES = "GOT_RIDES";
const FOUND_RIDE = "FOUND_RIDE";

const initialState = {
  ride: {},
  rides: []
};

const gotRide = ride => ({ type: GOT_RIDE, ride });
const gotRides = rides => ({ type: GOT_RIDES, rides });
const foundRide = ride => ({ type: FOUND_RIDE, ride });

export const getRide = obj => async dispatch => {
  try {
    console.log("destin and arr params", obj);
    const ride = await axios.post("/api/rides/", obj);
    dispatch(gotRide(ride));
  } catch (error) {
    console.error(error);
  }
};

export const getRides = userId => async dispatch => {
  try {
    console.log("finding past rides", userId);
    const rides = await axios.get(`/api/rides/${userId}`);
    console.log('rides?',rides.data)
    dispatch(gotRides(rides.data));
  } catch (error) {
    console.error(error);
  }
};


export const findRide = obj => async dispatch => {
  try {
    console.log("destin and arr params", obj);
    const ride = await axios.put("/api/rides/", obj);
    dispatch(foundRide(ride));
  } catch (error) {
    console.error(error);
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_RIDE:
      return { ...state, ride: action.ride };
    case GOT_RIDES:
      return {...state, rides: action.rides}
    case FOUND_RIDE:
      return { ...state, ride: action.ride };
    default:
      return state;
  }
}
