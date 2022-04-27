import { connect } from "react-redux";
import MainControls from "./MainControls";
import { editPlaylistRoutine } from "../../redux-store/actions/routines";
import { isEqualArrays } from "../../utils";

const mapStateToProps = ({ 
  user: { playlists },
  player: { songsInPlaylist, currentPlaylist }
}) => ({
  isPlaylistChanged: isEqualArrays(songsInPlaylist, playlists.find(list => list._id === currentPlaylist)?.songs || []),
});

const mapDispatchToProps = (dispatch) => ({
  editPlaylist: () => dispatch(editPlaylistRoutine()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainControls);