import { connect } from "react-redux";
import SaveButton from "../../components/SaveButton"

import { registerRoutine } from "../../redux-store/actions/routines";

const mapStateToProps = ({ loading: { [registerRoutine.LOADING]: isLoading }}) => ({
  isLoading,
});

export default connect(mapStateToProps, null)(SaveButton);