import { SET_SONGS, SET_USER } from "../actions/types";

const initialState = {};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_SONGS:
      return {
        ...state,
        songs: action.payload,
      };
    case SET_USER:
      return { ...action.payload };
    default:
      return state;
  }
};

export default user
