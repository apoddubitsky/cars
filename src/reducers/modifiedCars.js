// constants
import {
  SAVE_MODIFIED_CARS,
} from 'constants/actionTypes';

const initialState = {
  modifiedCars: [],
};

const modifiedCars = (state = initialState, action) => {
  if (action.type === SAVE_MODIFIED_CARS) {
    return { ...state, modifiedCars: action.cars };
  }

  return state;
};

export default modifiedCars;
