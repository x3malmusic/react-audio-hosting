import { connect } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import { silentLoginRoutine } from "../../redux-store/actions/routines";

const mapStateToProps = ({ user, loading: { [silentLoginRoutine.LOADING]: loading } }) => ({
  user,
  loading
});

const mapDispatchToProps = (dispatch) => ({
  silentLogin: () => dispatch(silentLoginRoutine()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);