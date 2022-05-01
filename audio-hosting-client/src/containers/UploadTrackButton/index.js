import { connect } from "react-redux";
import SaveButton from "../../components/SaveButton"

import { uploadTrackRoutine } from "../../redux-store/actions/routines";

const mapStateToProps = ({
    loading: { [uploadTrackRoutine.LOADING]: isLoading }
  }) => ({
    isLoading,
});

export default connect(mapStateToProps, null)(SaveButton);