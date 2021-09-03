import { connect } from "react-redux";
import Player from "./Player";
import { setSong, setPlay } from "../../redux-store/actions";

const mapStateToProps = ({ user: { songs }, player: { currentSong, play } }) => ({
  songs,
  currentSong,
  play
});

const mapDispatchToProps = (dispatch) => ({
  setSong: (index) => dispatch(setSong(index)),
  setPlay: (play) => dispatch(setPlay(play)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Player);