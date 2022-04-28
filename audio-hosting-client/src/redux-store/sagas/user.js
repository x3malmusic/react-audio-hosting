import { takeLatest, put, select } from "redux-saga/effects";
import {
  SET_SONGS,
  SET_USER,
  CLEAR_USER,
  INIT_PLAYER,
  SET_PLAYLIST,
  SET_PLAYER_SETTINGS
} from "../actions/types";
import { 
  silentLoginRoutine,
  loginRoutine,
  registerRoutine,
  uploadTrackRoutine,
  saveUserSettingsRoutine,
  createNewPlaylistRoutine,
  editPlaylistRoutine,
  logoutRoutine,
 } from "../actions/routines";
import { safe } from "./error";
import {
  uploadSong,
  register,
  login,
  silentLogin,
  createPlaylist,
  saveUserSettings,
  editPlaylist
} from "../../services/http";
import { saveToken, deleteToken } from "../../utils/token";
import { arrayToMap } from "../../utils";

const registerUser = function* ({ payload }) {
  const { user, token }  = yield register(payload);
  const { settings, ...userData } = user

  saveToken(token)
  yield put({ type: SET_USER, payload: { ...userData, songs: arrayToMap(userData.songs) }})
  yield put({ type: SET_PLAYER_SETTINGS, payload: settings })
};

const loginUser = function* ({ payload }) {
  const { user, token } = yield login(payload);
  const { settings, ...userData } = user

  saveToken(token)

  yield put({ type: SET_USER, payload: { ...userData, songs: arrayToMap(userData.songs) }})
  yield put({ type: SET_PLAYER_SETTINGS, payload: settings })
  yield put({ type: INIT_PLAYER })
};

const silentLoginUser = function* () {
  const data = yield silentLogin();
  const { settings , ...user } = data

  yield put({ type: SET_USER, payload: {...user, songs: arrayToMap(user.songs)} })
  yield put({ type: SET_PLAYER_SETTINGS, payload: settings })
  yield put({ type: INIT_PLAYER })
};

const logoutUser = function* () {
  deleteToken();
  yield put({ type: CLEAR_USER })
};

const uploadTrack = function* ({ payload }) {
  const data = new FormData();
  data.append('song', payload.file);
  const song = yield uploadSong({ file: data, setUploadProgress: payload.setUploadProgress });

  const allSongs = yield select(state => state.user.songs);
  allSongs[song._id] = song

  payload.setUploadProgress(0)

  yield put({ type: SET_SONGS, payload: { ...allSongs } });
};

const createNewPlaylist = function* () {
  const { songs, name } = yield select(state => state.newPlaylist.songs);

  const playlist = yield createPlaylist({ name, songs });

  const user = yield select(state => state.user)
  user.playlists = [...user.playlists, playlist]

  yield put({ type: SET_USER, payload: { ...user } })
};

const saveSettings = function* ({ payload }) {
  const user = yield saveUserSettings(payload);
  yield put({ type: SET_USER, payload: user });
};

const editUserPlaylist = function* () {
  const { currentPlaylist: playlistId, songsInPlaylist } = yield select(state => state.player)

  const playlist = yield editPlaylist({ playlistId, songsInPlaylist });

  const { playlists: userPlaylists } = yield select(state => state.user);
  const newPlaylists = yield userPlaylists.map(list => {
    if (list._id === playlistId) return playlist
    return list
  })

  yield put({ type: SET_PLAYLIST, payload: newPlaylists })
};

const userSagas = [
  takeLatest(uploadTrackRoutine.REQUEST, safe(uploadTrack)),
  takeLatest(registerRoutine.REQUEST, safe(registerUser)),
  takeLatest(loginRoutine.REQUEST, safe(loginUser)),
  takeLatest(silentLoginRoutine.REQUEST, safe(silentLoginUser)),
  takeLatest(logoutRoutine.REQUEST, safe(logoutUser)),
  takeLatest(createNewPlaylistRoutine.REQUEST, safe(createNewPlaylist)),
  takeLatest(saveUserSettingsRoutine.REQUEST, safe(saveSettings)),
  takeLatest(editPlaylistRoutine.REQUEST, safe(editUserPlaylist)),
];

export default userSagas;
