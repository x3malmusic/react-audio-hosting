import { connect } from "react-redux";
import Main from "./Main";
import { setPlaylist, setSongsInPlaylist, editPlaylist } from "../../redux-store/actions";

const mapStateToProps = ({ user: { playlists }, player: { songsInPlaylist } }) => ({
  playlists,
  songsInPlaylist
});

const mapDispatchToProps = (dispatch) => ({
  changePlaylist: (id) => dispatch(setPlaylist(id)),
  setSongs: (songs) => dispatch(setSongsInPlaylist(songs)),
  editPlaylist: () => dispatch(editPlaylist()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);