import { connect } from "react-redux";
import CreatePlaylist from "./CreatePlaylist";
import { setSong, setNameOfNewPlaylist, setSongsOfNewPlaylist } from "../../redux-store/actions";

const mapStateToProps = ({ user: { songs } , newPlaylist: { songs: newPlaylistSongs }}) => ({
  songs,
  newPlaylistSongs
});

const mapDispatchToProps = (dispatch) => ({
  setSong: (song) => dispatch(setSong(song)),
  setName: (name) => dispatch(setNameOfNewPlaylist(name)),
  setSongs: (song) => dispatch(setSongsOfNewPlaylist(song)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlaylist);