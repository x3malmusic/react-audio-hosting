import { SET_SONGS_NEW_PLAYLIST } from "../actions/types";

const initialState = {
  songs: []
};

const newPlaylist = (state = initialState, action) => {
  switch (action.type) {
    case SET_SONGS_NEW_PLAYLIST:
      return {
        ...state,
        songs: action.payload,
      };
    default:
      return state;
  }
};

export default newPlaylist