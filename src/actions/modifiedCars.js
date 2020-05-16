// constants
import {
  SAVE_MODIFIED_CARS,
} from 'constants/actionTypes';

const saveModifiedCars = (cars) => ({
  type: SAVE_MODIFIED_CARS,
  cars,
});

export default saveModifiedCars;
