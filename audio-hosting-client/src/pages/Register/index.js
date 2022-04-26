import { connect } from "react-redux";
import Register from "./Register";
import { registerRoutine } from "../../redux-store/actions/routines";

const mapDispatchToProps = (dispatch) => ({
  register: (creds) => dispatch(registerRoutine(creds)),
})

export default connect(null, mapDispatchToProps)(Register);