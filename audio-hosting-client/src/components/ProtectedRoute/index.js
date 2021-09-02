import { connect } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import { silentLogin } from "../../redux-store/actions";

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = (dispatch) => ({
  silentLogin: () => dispatch(silentLogin()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);