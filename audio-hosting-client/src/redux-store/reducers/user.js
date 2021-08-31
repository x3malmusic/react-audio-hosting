import { SET_SONGS } from "../actions/types";

const initialState = {
  songs: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_SONGS:
      return {
        ...state,
        songs: action.payload,
      };
    default:
      return state;
  }
};

export default user
