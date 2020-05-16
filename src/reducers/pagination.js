// constants
import {
  SET_PAGE,
} from 'constants/actionTypes';

const initialState = {
  page: 1,
  itemsByPage: 30,
};

const pagination = (state = initialState, action) => {
  if (action.type === SET_PAGE) {
    return { ...state, page: action.page };
  }

  return state;
};

export default pagination;
