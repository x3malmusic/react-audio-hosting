import { CHANGE_SONG, SET_PLAY, SET_CURRENT_PLAYLIST, SET_SONGS_IN_PLAYLIST } from "../actions/types";

const initialState = {
  currentSong: "",
  nextSong: "",
  previousSong: "",
  play: false,
  currentPlaylist: "",
  songsInPlaylist: []
};

const player = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SONG:
      return {
        ...state,
        currentSong: action.payload.currentSong,
        nextSong: action.payload.nextSong,
        previousSong: action.payload.previousSong,
      };
    case SET_PLAY:
      return {
        ...state,
        play: action.payload,
      };
    case SET_CURRENT_PLAYLIST:
      return {
        ...state,
        currentPlaylist: action.payload,
      };
    case SET_SONGS_IN_PLAYLIST:
      return {
        ...state,
        songsInPlaylist: action.payload,
      };
    default:
      return state;
  }
};

export default player
