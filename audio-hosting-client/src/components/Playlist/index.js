import { connect } from "react-redux";
import Playlist from "./Playlist";
import { setSong, reorderSongsOfCurrentPlaylist, setPlay } from "../../redux-store/actions";

const mapStateToProps = ({ user: { songs }, player: { currentSong, songsInPlaylist } }) => ({
  allSongs: songs,
  songs: songsInPlaylist,
  currentSong
});

const mapDispatchToProps = (dispatch) => ({
  setPlaySong: (song) => dispatch(setSong(song)),
  setSongs: (songs) => dispatch(reorderSongsOfCurrentPlaylist(songs)),
  setPlay: (play) => dispatch(setPlay(play)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);