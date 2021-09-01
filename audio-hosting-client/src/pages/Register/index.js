import { connect } from "react-redux";
import Register from "./Register";
import { setPlay } from "../../redux-store/actions";

const mapDispatchToProps = (dispatch) => ({
  setPlay: (play) => dispatch(setPlay(play)),
})

export default connect(null, mapDispatchToProps)(Register);