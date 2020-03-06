import axios from "axios";

const GOT_RIDE = "GOT_RIDE";
const FOUND_RIDE = "FOUND_RIDE";

const initialState = {
  ride: {}
};

const gotRide = ride => ({ type: GOT_RIDE, ride });
const foundRide = ride => ({ type: FOUND_RIDE, ride });

export const getRide = obj => async dispatch => {
  try {
    console.log("destin and arr params", obj);
    const ride = await axios.post("/api/rides", obj);
    dispatch(gotRide(ride));
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
    case FOUND_RIDE:
      return { ...state, ride: action.ride };
    default:
      return state;
  }
}
