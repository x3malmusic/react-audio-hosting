import { connect } from "react-redux";
import Login from "./Login";
import { setPlay } from "../../redux-store/actions";

const mapDispatchToProps = (dispatch) => ({
  setPlay: (play) => dispatch(setPlay(play)),
})

export default connect(null, mapDispatchToProps)(Login);