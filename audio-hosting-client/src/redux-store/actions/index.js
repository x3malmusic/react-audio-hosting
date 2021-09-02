import {
  REGISTER,
  LOGIN,
  UPLOAD_TRACK,
  GET_SONGS,
  SET_CURRENT_SONG,
  SET_PLAY,
  SILENT_LOGIN,
  LOG_OUT,
  SET_LOADING
} from "./types";

export const getSongs = () => ({
  type: GET_SONGS,
});

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
