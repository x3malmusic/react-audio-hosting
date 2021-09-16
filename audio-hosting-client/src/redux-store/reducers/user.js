import { CLEAR_USER, SET_SONGS, SET_USER, SET_PLAYLIST } from "../actions/types";

const initialState = {};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_SONGS:
      return {
        ...state,
        songs: action.payload,
      };
    case SET_USER:
      return { ...state, ...action.payload };
    case SET_PLAYLIST:
      return { ...state,
        playlists: action.payload
      };
    case CLEAR_USER:
      return {};
    default:
      return state;
  }
};

export default user