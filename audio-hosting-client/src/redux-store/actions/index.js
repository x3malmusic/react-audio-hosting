import {
  SET_CURRENT_SONG,
  SET_PLAY,
  LOG_OUT,
  SET_LOADING,
  SET_SONGS_IN_PLAYLIST,
  SET_SONGS_NEW_PLAYLIST,
  SET_CURRENT_PLAYLIST,
  REORDER_SONGS_IN_PLAYLIST,
  PLAY_NEXT_SONG,
  PLAY_PREVIOUS_SONG,
  SET_SEARCH_VALUE,
} from "./types";

export const setSong = (payload) => ({
  type: SET_CURRENT_SONG,
  payload
});

export const setPlay = (payload) => ({
  type: SET_PLAY,
  payload
});

export const logout = () => ({
  type: LOG_OUT,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload
});

export const setSongsOfNewPlaylist = (payload) => ({
  type: SET_SONGS_NEW_PLAYLIST,
  payload
});

export const reorderSongsOfCurrentPlaylist = (payload) => ({
  type: REORDER_SONGS_IN_PLAYLIST,
  payload
});

export const setPlaylist = (id) => ({
  type: SET_CURRENT_PLAYLIST,
  payload: id
});

export const playNext = () => ({
  type: PLAY_NEXT_SONG,
});

export const playPrevious = () => ({
  type: PLAY_PREVIOUS_SONG,
});

export const setSearchValue = (payload) => ({
  type: SET_SEARCH_VALUE,
  payload
});

export const setSongsInPlaylist = (payload) => ({
  type: SET_SONGS_IN_PLAYLIST,
  payload
});

