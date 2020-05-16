// constants
import {
  SAVE_ALL_CARS,
  SET_DOWNLOADING_FLAG,
  SET_SEARCH_PARAMS,
  SET_FILTER_PARAMS,
  SAVE_CARS_HERE,
  REMOVE_ONE_FILTER_PARAM,
  SET_SORT_PARAMS,
  ADD_CAR,
} from 'constants/actionTypes';

const saveAllCars = (cars) => ({
  type: SAVE_ALL_CARS,
  cars,
});

const setDownloadingFlag = (flag) => ({
  type: SET_DOWNLOADING_FLAG,
  isDownload: flag,
});

const setSearchParams = (params) => ({
  type: SET_SEARCH_PARAMS,
  searchParams: params,
});

const setFilterParams = (params) => ({
  type: SET_FILTER_PARAMS,
  filterParams: params,
});

const removeFilterParams = (filterBy) => ({
  type: REMOVE_ONE_FILTER_PARAM,
  filterBy,
});

const saveCarsHere = (carsHere) => ({
  type: SAVE_CARS_HERE,
  carsHere,
});

const setSortParams = (sortParams) => ({
  type: SET_SORT_PARAMS,
  sortParams,
});

const addCar = (newCar) => ({
  type: ADD_CAR,
  newCar,
});

export {
  saveAllCars,
  setDownloadingFlag,
  setSearchParams,
  setFilterParams,
  saveCarsHere,
  removeFilterParams,
  setSortParams,
  addCar,
};
