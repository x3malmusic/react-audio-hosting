import { connect } from "react-redux";
import UploadTrack from "./UploadTrack";
import { uploadTrackRoutine } from "../../redux-store/actions/routines";

const mapStateToProps = ({ loading: { SET_LOADING_UPLOAD_TRACK: loading } }) => ({
  loading,
});

const mapDispatchToProps = (dispatch) => ({
  upload: (song) => dispatch(uploadTrackRoutine(song)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UploadTrack);