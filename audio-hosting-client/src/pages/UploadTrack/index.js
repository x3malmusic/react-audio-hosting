import { connect } from "react-redux";
import UploadTrack from "./UploadTrack";
import { uploadTrack } from "../../redux-store/actions";

const mapDispatchToProps = (dispatch) => ({
  upload: (song) => dispatch(uploadTrack(song)),
})

export default connect(null, mapDispatchToProps)(UploadTrack);