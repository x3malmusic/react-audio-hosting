import {
  CHANGE_SONG,
  SET_PLAY,
  SET_CURRENT_PLAYLIST,
  SET_SONGS_IN_PLAYLIST,
  SET_PLAYER_SETTINGS,
  INIT_PLAYER_END,
  SET_SEARCH_VALUE,
} from "../actions/types";
import { DEFAULT_VOLUME, DEFAULT_REMEMBER_LAST_SONG } from "../../constants/default_settings";
import { getLastPlayedPlaylist } from "../../utils/userSettings";

const lastPlayedPlaylist = getLastPlayedPlaylist()

const initialState = {
  initPlayer: false,
  currentSong: "",
  nextSong: "",
  previousSong: "",
  play: false,
  currentPlaylist: "",
  songsInPlaylist: [],
  defaultPlaylist: lastPlayedPlaylist,
  defaultVolume: DEFAULT_VOLUME,
  rememberLastSong: DEFAULT_REMEMBER_LAST_SONG,
  searchValue: "",
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
    case SET_PLAYER_SETTINGS:
      return {
        ...state,
        defaultVolume: action.payload.defaultVolume,
        rememberLastSong: action.payload.rememberLastSong,
      };
    case INIT_PLAYER_END:
      return {
        ...state,
        initPlayer: true,
      };
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      return state;
  }
};

export default player
