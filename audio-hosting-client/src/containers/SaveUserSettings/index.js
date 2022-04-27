import { connect } from "react-redux";
import SaveButton from "../../components/SaveButton"

import { saveUserSettingsRoutine } from "../../redux-store/actions/routines";

const mapStateToProps = ({
    loading: { [saveUserSettingsRoutine.LOADING]: saveUserSettingsIsLoading }
  }) => ({
    isLoading: saveUserSettingsIsLoading,
});

export default connect(mapStateToProps, null)(SaveButton);