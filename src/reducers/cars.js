// constants
import {
  SAVE_ALL_CARS,
  SET_DOWNLOADING_FLAG,
  SET_FILTER_PARAMS,
  SET_SEARCH_PARAMS,
  SAVE_CARS_HERE,
  REMOVE_ONE_FILTER_PARAM,
  SET_SORT_PARAMS,
  ADD_CAR,
} from 'constants/actionTypes';

const initialState = {
  cars: [],
  isDownload: false,
  searchParams: {},
  filterParams: [],
  carsHere: [],
  sortParams: {
    sortBy: 'car_tenant',
    sortOrder: 'desc',
  },
};

const cars = (state = initialState, action) => {
  if (action.type === SAVE_ALL_CARS) {
    return { ...state, cars: action.cars };
  }

  if (action.type === SET_DOWNLOADING_FLAG) {
    return { ...state, isDownload: action.isDownload };
  }

  if (action.type === SET_SEARCH_PARAMS) {
    return { ...state, searchParams: action.searchParams };
  }

  if (action.type === SET_FILTER_PARAMS) {
    return {
      ...state,
      filterParams: !state.filterParams.length ? [action.filterParams] : (() => {
        let isParamsPresented = false;
        const newFilterParams = state.filterParams.map((filterParam) => {
          if (filterParam.filterBy === action.filterParams.filterBy) {
            isParamsPresented = true;
            return action.filterParams;
          }
          return filterParam;
        });

        if (!isParamsPresented) {
          newFilterParams.push(action.filterParams);
        }

        return newFilterParams;
      })(),
    };
  }

  if (action.type === SAVE_CARS_HERE) {
    return { ...state, carsHere: action.carsHere };
  }

  if (action.type === REMOVE_ONE_FILTER_PARAM) {
    return {
      ...state,
      filterParams: state.filterParams
        .filter((filterParam) => filterParam.filterBy !== action.filterBy),
    };
  }


  if (action.type === SET_SORT_PARAMS) {
    return { ...state, sortParams: action.sortParams };
  }

  if (action.type === ADD_CAR) {
    return { ...state, cars: [...state.cars, action.newCar] };
  }

  return state;
};

export default cars;
