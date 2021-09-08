import { takeLatest, put, select } from "redux-saga/effects";
import {
  SET_SONGS,
  UPLOAD_TRACK,
  SET_USER,
  REGISTER,
  LOGIN,
  SILENT_LOGIN,
  LOG_OUT,
  CREATE_NEW_PLAYLIST,
} from "../actions/types";
import { safe } from "./error";
import { uploadSong, register, login, silentLogin, createPlaylist } from "../../services/http";
import { saveToken, deleteToken } from "../../utils/token";
import { arrayToMap } from "../../utils";

const registerUser = function* ({ payload }) {
  const data = yield register(payload);
  saveToken(data.token)
  yield put({ type: SET_USER, payload: {...data.user, songs: arrayToMap(data.user.songs)} })
};

const loginUser = function* ({ payload }) {
  const data = yield login(payload);
  saveToken(data.token)
  yield put({ type: SET_USER, payload: {...data.user, songs: arrayToMap(data.user.songs)}})
};

const silentLoginUser = function* () {
  let data = yield silentLogin();
  yield put({ type: SET_USER, payload: {...data, songs: arrayToMap(data.songs)} })
};

const logoutUser = function* () {
  deleteToken();
  yield put({ type: SET_USER, payload: {} })
};

const uploadTrack = function* ({ payload }) {
  const data = new FormData();
  data.append('song', payload.file);
  const song = yield uploadSong({ file: data, setUploadProgress: payload.setUploadProgress });
  const allSongs = yield select(state => state.user.songs);

  yield put({ type: SET_SONGS, payload: [...allSongs, song] });
};

const createNewPlaylist = function* () {
  const newSongs = yield select(state => state.newPlaylist.songs);
  const playlistName = yield select(state => state.newPlaylist.name);

  const playlist = yield createPlaylist({ name: playlistName, songs: Object.keys(newSongs) });

  const user = yield select(state => state.user)
  user.playlists = { ...user, [playlist._id]: playlist }

  yield put({ type: SET_USER, payload: { ...user } })
};

const userSagas = [
  takeLatest(UPLOAD_TRACK, safe(uploadTrack)),
  takeLatest(REGISTER, safe(registerUser)),
  takeLatest(LOGIN, safe(loginUser)),
  takeLatest(SILENT_LOGIN, safe(silentLoginUser)),
  takeLatest(LOG_OUT, safe(logoutUser)),
  takeLatest(CREATE_NEW_PLAYLIST, safe(createNewPlaylist)),
];

export default userSagas;
