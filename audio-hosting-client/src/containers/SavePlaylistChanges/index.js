import { connect } from "react-redux";
import SaveButton from "../../components/SaveButton"

import { editPlaylistRoutine } from "../../redux-store/actions/routines";

const mapStateToProps = ({
  loading: { [editPlaylistRoutine.LOADING]: savePlaylistChangesLoading },
}) => ({
  isLoading: savePlaylistChangesLoading,
});

export default connect(mapStateToProps, null)(SaveButton);