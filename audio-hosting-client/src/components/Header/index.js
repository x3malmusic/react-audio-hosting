import { connect } from "react-redux";
import Header from "./Header";
import { logoutRoutine } from "../../redux-store/actions/routines";

const mapStateToProps = ({ user: { email, name } }) => ({
  email,
  name
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutRoutine()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)