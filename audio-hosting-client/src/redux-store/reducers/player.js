import { CHANGE_SONG, SET_PLAY, SET_CURRENT_PLAYLIST, SET_SONGS_IN_PLAYLIST, SAVE_PLAYER_SETTINGS } from "../actions/types";
import { getLocalSettings } from "../../utils/userSettings";

const settings = getLocalSettings()

const initialState = {
  currentSong: "",
  nextSong: "",
  previousSong: "",
  play: false,
  currentPlaylist: "",
  songsInPlaylist: [],
  defaultPlaylist: settings.defaultPlaylist,
  defaultVolume: settings.defaultVolume
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
    case SAVE_PLAYER_SETTINGS:
      return {
        ...state,
        defaultPlaylist: action.payload.defaultPlaylist,
        defaultVolume: action.payload.defaultVolume,
      };
    default:
      return state;
  }
};

export default player
