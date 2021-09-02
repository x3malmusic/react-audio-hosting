import { connect } from "react-redux";
import Login from "./Login";
import { login } from "../../redux-store/actions";

const mapDispatchToProps = (dispatch) => ({
  login: (creds) => dispatch(login(creds)),
})

export default connect(null, mapDispatchToProps)(Login);