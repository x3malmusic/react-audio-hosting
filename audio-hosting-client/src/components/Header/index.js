import { connect } from "react-redux";
import Header from "./Header";
import { logout } from "../../redux-store/actions";

const mapStateToProps = ({ user: { email, name } }) => ({
  email,
  name
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)