import { connect } from "react-redux";
import Login from "./Login";
import { loginRoutine } from "../../redux-store/actions/routines";

const mapDispatchToProps = (dispatch) => ({
  login: (creds) => dispatch(loginRoutine(creds)),
})

export default connect(null, mapDispatchToProps)(Login);