import { connect } from "react-redux";
import SaveButton from "../../components/SaveButton"

import { savePlayerSettingsRoutine } from "../../redux-store/actions/routines";

const mapStateToProps = ({
    loading: { [savePlayerSettingsRoutine.LOADING]: saveUserSettingsIsLoading }
  }) => ({
    isLoading: saveUserSettingsIsLoading,
});

export default connect(mapStateToProps, null)(SaveButton);