import { SET_SONGS, SET_USER } from "../actions/types";

const initialState = {
  songs: []
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_SONGS:
      return {
        ...state,
        songs: action.payload,
      };
    case SET_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default user
