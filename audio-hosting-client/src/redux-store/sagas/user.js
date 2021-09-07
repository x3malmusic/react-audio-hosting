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
  LOGIN,
  SILENT_LOGIN,
  LOG_OUT,
  CREATE_NEW_PLAYLIST,
  SET_SONGS_IN_PLAYLIST,
  SET_CURRENT_PLAYLIST
} from "../actions/types";
import { safe } from "./error";
import { uploadSong, getSongs, register, login, silentLogin, createPlaylist } from "../../services/http";
import { saveToken, deleteToken } from "../../utils/token";
import { arrayToMap } from "../../utils";

const registerUser = function* ({ payload }) {
  const data = yield register(payload);
  saveToken(data.token)
  yield put({ type: SET_USER, payload: {...data, songs: arrayToMap(data.songs)} })
};

const loginUser = function* ({ payload }) {
  const data = yield login(payload);
  saveToken(data.token)
  yield put({ type: SET_USER, payload: {...data, songs: arrayToMap(data.songs)}})
};

const silentLoginUser = function* () {
  let data = yield silentLogin();
  yield put({ type: SET_USER, payload: {...data, songs: arrayToMap(data.songs)} })
};

const logoutUser = function* () {
  deleteToken();
  yield put({ type: SET_USER, payload: {} })
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

  const songs = yield select(state => state.player.songsInPlaylist);

  if (payload > songs.length - 1) return yield put({ type: CHANGE_SONG, payload: 0 });
  if (payload < 0) return yield put({ type: CHANGE_SONG, payload: songs.length - 1 });

  yield put({ type: CHANGE_SONG, payload: payload });
};

const createNewPlaylist = function* () {
  const newSongs = yield select(state => state.newPlaylist.songs);
  const playlistName = yield select(state => state.newPlaylist.name);

  const playlist = yield createPlaylist({ name: playlistName, songs: Object.keys(newSongs) });

  const user = yield select(state => state.user)
  user.playlists = { ...user, [playlist._id]: playlist }

  yield put({ type: SET_USER, payload: { ...user } })
};

const changePlaylist = function* ({ payload }) {
  const playlists = yield select(state => state.user.playlists);
  const songsOfPlaylist = yield playlists.find(list => list._id === payload)

  yield put({ type: SET_SONGS_IN_PLAYLIST, payload: [...songsOfPlaylist.songs] });
};

const userSagas = [
  takeLatest(GET_SONGS, safe(getAllSongs)),
  takeLatest(UPLOAD_TRACK, safe(uploadTrack)),
  takeLatest(SET_CURRENT_SONG, setCurrentSong),
  takeLatest(REGISTER, safe(registerUser)),
  takeLatest(LOGIN, safe(loginUser)),
  takeLatest(SILENT_LOGIN, safe(silentLoginUser)),
  takeLatest(LOG_OUT, safe(logoutUser)),
  takeLatest(CREATE_NEW_PLAYLIST, safe(createNewPlaylist)),
  takeLatest(SET_CURRENT_PLAYLIST, changePlaylist),
];

export default userSagas;
