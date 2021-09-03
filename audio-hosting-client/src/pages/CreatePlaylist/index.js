import { connect } from "react-redux";
import CreatePlaylist from "./CreatePlaylist";
import { setSong } from "../../redux-store/actions";

const mapStateToProps = ({ user: { songs }}) => ({
  songs,
});

const mapDispatchToProps = (dispatch) => ({
  setSong: (song) => dispatch(setSong(song)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlaylist);