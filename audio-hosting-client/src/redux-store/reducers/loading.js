import { SET_LOADING } from "../actions/types";

const initialState = {};

const loading = (state = initialState, action) => {
  if (action.type.search(SET_LOADING) === 0) {
    return {
      ...state,
      [action.type]: action.payload,
    };
  }
  return state;
};

export default loading
