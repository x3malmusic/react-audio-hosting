import { connect } from "react-redux";
import Main from "./Main";
import { setPlaylist } from "../../redux-store/actions";

const mapStateToProps = ({ user: { playlists } }) => ({
  playlists
});

const mapDispatchToProps = (dispatch) => ({
  changePlaylist: (id) => dispatch(setPlaylist(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);