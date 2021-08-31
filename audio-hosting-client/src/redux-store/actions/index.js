import {
  UPLOAD_TRACK,
  GET_SONGS,
  SET_CURRENT_SONG,
  SET_PLAY
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