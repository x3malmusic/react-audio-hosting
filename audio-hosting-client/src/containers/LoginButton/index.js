import { connect } from "react-redux";
import SaveButton from "../../components/SaveButton"

import { loginRoutine } from "../../redux-store/actions/routines";

const mapStateToProps = ({ loading: { [loginRoutine.LOADING]: isLoading }}) => ({
  isLoading,
});

export default connect(mapStateToProps, null)(SaveButton);