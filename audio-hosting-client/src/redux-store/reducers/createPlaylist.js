import { SET_SONGS_NEW_PLAYLIST, SET_NAME_NEW_PLAYLIST } from "../actions/types";

const initialState = {
  name: "",
  songs: {}
};

const newPlaylist = (state = initialState, action) => {
  switch (action.type) {
    case SET_SONGS_NEW_PLAYLIST:
      return {
        ...state,
        songs: action.payload,
      };
    case SET_NAME_NEW_PLAYLIST:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default newPlaylist