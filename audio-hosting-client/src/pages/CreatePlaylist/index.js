import { connect } from "react-redux";
import CreatePlaylist from "./CreatePlaylist";
import { setSong, setNameOfNewPlaylist, setSongsOfNewPlaylist, createNewPlaylist } from "../../redux-store/actions";

const mapStateToProps = ({ user: { songs } , newPlaylist: { songs: newPlaylistSongs, name }}) => ({
  allSongs: songs,
  newPlaylistSongs,
  name
});

const mapDispatchToProps = (dispatch) => ({
  setSong: (song) => dispatch(setSong(song)),
  setName: (name) => dispatch(setNameOfNewPlaylist(name)),
  setSongs: (song) => dispatch(setSongsOfNewPlaylist(song)),
  createNewPlaylist: () => dispatch(createNewPlaylist()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlaylist);