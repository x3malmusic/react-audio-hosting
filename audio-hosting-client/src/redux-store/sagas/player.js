import { put, select, takeLatest } from "redux-saga/effects";
import {
  CHANGE_SONG,
  SET_CURRENT_PLAYLIST,
  SET_CURRENT_SONG,
  SET_PLAY,
  SET_SONGS_IN_PLAYLIST,
} from "../actions/types";


const setCurrentSong = function* ({ payload }) {
  const play = yield select(state => state.player.play);
  if (!play) yield put({ type: SET_PLAY, payload: true });

  const songs = yield select(state => state.player.songsInPlaylist);

  if (payload > songs.length - 1) return yield put({ type: CHANGE_SONG, payload: 0 });
  if (payload < 0) return yield put({ type: CHANGE_SONG, payload: songs.length - 1 });

  yield put({ type: CHANGE_SONG, payload: payload });
};

const changePlaylist = function* ({ payload }) {
  const playlists = yield select(state => state.user.playlists);
  const songsOfPlaylist = yield playlists.find(list => list._id === payload)

  yield put({ type: SET_SONGS_IN_PLAYLIST, payload: [...songsOfPlaylist.songs] });
};

const playerSagas = [
  takeLatest(SET_CURRENT_SONG, setCurrentSong),
  takeLatest(SET_CURRENT_PLAYLIST, changePlaylist),
];

export default playerSagas;