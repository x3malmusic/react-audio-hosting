import { connect } from "react-redux";
import Main from "./Main";
import { setPlaylist, setSongsInPlaylist } from "../../redux-store/actions";

const mapStateToProps = ({ user: { playlists }, player: { songsInPlaylist } }) => ({
  playlists,
  songsInPlaylist
});

const mapDispatchToProps = (dispatch) => ({
  changePlaylist: (id) => dispatch(setPlaylist(id)),
  setSongs: (songs) => dispatch(setSongsInPlaylist(songs)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);