import { connect } from "react-redux";
import Player from "./Player";
import { setSong } from "../../redux-store/actions";

const mapStateToProps = ({ user: { songs }, player: { currentSong, play } }) => ({
  songs,
  currentSong,
  play
});

const mapDispatchToProps = (dispatch) => ({
  setSong: (index) => dispatch(setSong(index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Player);