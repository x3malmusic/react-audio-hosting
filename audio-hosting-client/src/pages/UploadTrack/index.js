import { connect } from "react-redux";
import UploadTrack from "./UploadTrack";
import { uploadTrack } from "../../redux-store/actions";

const mapStateToProps = ({ loading: { SET_LOADING_UPLOAD_TRACK: loading } }) => ({
  loading,
});

const mapDispatchToProps = (dispatch) => ({
  upload: (song) => dispatch(uploadTrack(song)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UploadTrack);