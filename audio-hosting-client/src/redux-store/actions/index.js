import {
  REGISTER,
  LOGIN,
  UPLOAD_TRACK,
  SET_CURRENT_SONG,
  SET_PLAY,
  SILENT_LOGIN,
  LOG_OUT,
  SET_LOADING,
  SET_NAME_NEW_PLAYLIST,
  SET_SONGS_NEW_PLAYLIST,
  CREATE_NEW_PLAYLIST,
  SET_CURRENT_PLAYLIST
} from "./types";

export const uploadTrack = (payload) => ({
  type: UPLOAD_TRACK,
  payload
});

export const setSong = (payload) => ({
  type: SET_CURRENT_SONG,
  payload
});

export const setPlay = (payload) => ({
  type: SET_PLAY,
  payload
});

export const register = (payload) => ({
  type: REGISTER,
  payload
});

export const login = (payload) => ({
  type: LOGIN,
  payload
});

export const silentLogin = () => ({
  type: SILENT_LOGIN,
});

export const logout = () => ({
  type: LOG_OUT,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload
});

export const setNameOfNewPlaylist = (payload) => ({
  type: SET_NAME_NEW_PLAYLIST,
  payload
});

export const setSongsOfNewPlaylist = (payload) => ({
  type: SET_SONGS_NEW_PLAYLIST,
  payload
});

export const createNewPlaylist = () => ({
  type: CREATE_NEW_PLAYLIST,
});

export const setPlaylist = (id) => ({
  type: SET_CURRENT_PLAYLIST,
  payload: id
});

