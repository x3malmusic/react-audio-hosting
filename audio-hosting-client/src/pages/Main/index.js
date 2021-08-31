import { connect } from "react-redux";
import Main from "./Main";
import { setPlay } from "../../redux-store/actions";

const mapDispatchToProps = (dispatch) => ({
  setPlay: (play) => dispatch(setPlay(play)),
})

export default connect(null, mapDispatchToProps)(Main);