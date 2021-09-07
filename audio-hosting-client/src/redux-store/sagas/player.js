import { put, select, takeLatest } from "redux-saga/effects";
import {
  CHANGE_SONG,
  SET_CURRENT_PLAYLIST,
  SET_CURRENT_SONG,
  SET_PLAY,
  SET_SONGS_IN_PLAYLIST,
  PLAY_NEXT_SONG,
  PLAY_PREVIOUS_SONG
} from "../actions/types";


const setCurrentSong = function* ({ payload }) {
  const play = yield select(state => state.player.play);
  if (!play) yield put({ type: SET_PLAY, payload: true });

  const songs = yield select(state => state.player.songsInPlaylist);
  const currentSongIndex = yield songs.indexOf(payload)
  let nextSongId = yield songs[currentSongIndex + 1]
  let previousSongId = yield songs[currentSongIndex - 1]

  if (!nextSongId) nextSongId = songs[0]
  if (!previousSongId) previousSongId = songs[songs.length - 1]

  yield put({ type: CHANGE_SONG, payload: { currentSong: payload, nextSong: nextSongId, previousSong: previousSongId } });
};

const changePlaylist = function* ({ payload }) {
  const playlists = yield select(state => state.user.playlists);
  const songsOfPlaylist = yield playlists.find(list => list._id === payload)

  yield put({ type: SET_SONGS_IN_PLAYLIST, payload: [...songsOfPlaylist.songs] });
};

const playNext = function* () {
  const nextSong = yield select(state => state.player.nextSong);
  yield put({ type: SET_CURRENT_SONG, payload: nextSong });
};

const playPrevious = function* () {
  const prevSong = yield select(state => state.player.previousSong);
  yield put({ type: SET_CURRENT_SONG, payload: prevSong });
};

const playerSagas = [
  takeLatest(SET_CURRENT_SONG, setCurrentSong),
  takeLatest(SET_CURRENT_PLAYLIST, changePlaylist),
  takeLatest(PLAY_NEXT_SONG, playNext),
  takeLatest(PLAY_PREVIOUS_SONG, playPrevious),
];

export default playerSagas;