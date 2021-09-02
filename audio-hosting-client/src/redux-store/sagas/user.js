import { takeLatest, put, select } from "redux-saga/effects";
import {
  GET_SONGS,
  SET_SONGS,
  UPLOAD_TRACK,
  SET_CURRENT_SONG,
  CHANGE_SONG,
  SET_PLAY,
  SET_USER,
  REGISTER,
  LOGIN
} from "../actions/types";
import { safe } from "./error";
import { uploadSong, getSongs, register, login } from "../../services/http";
import { saveToken } from "../../utils/token";

const registerUser = function* ({ payload }) {
  const data = yield register(payload);
  saveToken(data.token)
  yield put({ type: SET_USER, payload: data.user })
};

const loginUser = function* ({ payload }) {
  const data = yield login(payload);
  saveToken(data.token)
  yield put({ type: SET_USER, payload: data.user })
};

const getAllSongs = function* () {
  const songs = yield getSongs();
  yield put({ type: SET_SONGS, payload: songs });
};

const uploadTrack = function* ({ payload }) {
  const data = new FormData();
  data.append('song', payload.file);
  const song = yield uploadSong({ file: data, setUploadProgress: payload.setUploadProgress });
  const allSongs = yield select(state => state.user.songs);

  yield put({ type: SET_SONGS, payload: [...allSongs, song] });
};

const setCurrentSong = function* ({ payload }) {
  const play = yield select(state => state.player.play);
  if (!play) yield put({ type: SET_PLAY, payload: true });

  const songs = yield select(state => state.user.songs);

  if (payload > songs.length - 1) return yield put({ type: CHANGE_SONG, payload: 0 });
  if (payload < 0) return yield put({ type: CHANGE_SONG, payload: songs.length - 1 });

  yield put({ type: CHANGE_SONG, payload: payload });
};

const userSagas = [
  takeLatest(GET_SONGS, safe(getAllSongs)),
  takeLatest(UPLOAD_TRACK, safe(uploadTrack)),
  takeLatest(SET_CURRENT_SONG, setCurrentSong),
  takeLatest(REGISTER, safe(registerUser)),
  takeLatest(LOGIN, safe(loginUser)),
];

export default userSagas;
