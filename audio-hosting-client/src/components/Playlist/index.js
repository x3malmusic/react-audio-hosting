import { connect } from "react-redux";
import Playlist from "./Playlist";
import { setSong } from "../../redux-store/actions";

const mapStateToProps = ({ user: { songs }, player: { currentSong, songsInPlaylist } }) => ({
  allSongs: songs,
  songs: songsInPlaylist,
  currentSong
});

const mapDispatchToProps = (dispatch) => ({
  setPlaySong: (song) => dispatch(setSong(song)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);