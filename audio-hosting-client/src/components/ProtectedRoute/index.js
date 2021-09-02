import { connect } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import { silentLogin } from "../../redux-store/actions";

const mapStateToProps = ({ user, loading: { SET_LOADING_SILENT_LOGIN: loading } }) => ({
  user,
  loading
});

const mapDispatchToProps = (dispatch) => ({
  silentLogin: () => dispatch(silentLogin()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);