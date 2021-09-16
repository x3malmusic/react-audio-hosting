import { connect } from "react-redux";
import MainControls from "./MainControls";
import { editPlaylist } from "../../redux-store/actions";

const mapStateToProps = ({ loading: { "SET_LOADING_EDIT_PLAYLIST": loading } }) => ({
  loading
});

const mapDispatchToProps = (dispatch) => ({
  editPlaylist: () => dispatch(editPlaylist()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainControls);