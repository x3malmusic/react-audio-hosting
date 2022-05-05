import { connect } from "react-redux";
import CreatePlaylist from "./CreatePlaylist";
import { setSong, setSongsOfNewPlaylist } from "../../redux-store/actions";
import { createNewPlaylistRoutine } from "../../redux-store/actions/routines";

const mapStateToProps = ({ user: { songs } , newPlaylist: { songs: newPlaylistSongs, name }}) => ({
  allSongs: songs,
  newPlaylistSongs,
  name
});

const mapDispatchToProps = (dispatch) => ({
  setSong: (song) => dispatch(setSong(song)),
  setSongs: (song) => dispatch(setSongsOfNewPlaylist(song)),
  createNewPlaylist: (playlistName) => dispatch(createNewPlaylistRoutine(playlistName)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlaylist);