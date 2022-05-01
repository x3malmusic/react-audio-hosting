import { connect } from "react-redux";
import SaveButton from "../../components/SaveButton"

import { createNewPlaylistRoutine } from "../../redux-store/actions/routines";

const mapStateToProps = ({
    loading: { [createNewPlaylistRoutine.LOADING]: isLoading }
  }) => ({
    isLoading,
});

export default connect(mapStateToProps, null)(SaveButton);