import { connect } from "react-redux";
import MainControls from "./MainControls";
import { editPlaylist } from "../../redux-store/actions";
import { isEqualArrays } from "../../utils";

const mapStateToProps = ({ user: { playlists }, loading: { "SET_LOADING_EDIT_PLAYLIST": loading }, player: { songsInPlaylist, currentPlaylist } }) => ({
  isPlaylistChanged: isEqualArrays(songsInPlaylist, playlists.find(list => list._id === currentPlaylist)?.songs || []),
  loading
});

const mapDispatchToProps = (dispatch) => ({
  editPlaylist: () => dispatch(editPlaylist()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainControls);