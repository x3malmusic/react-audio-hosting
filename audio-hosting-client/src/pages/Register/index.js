import { connect } from "react-redux";
import Register from "./Register";
import { register } from "../../redux-store/actions";

const mapDispatchToProps = (dispatch) => ({
  register: (creds) => dispatch(register(creds)),
})

export default connect(null, mapDispatchToProps)(Register);