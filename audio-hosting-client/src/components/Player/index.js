import { connect } from "react-redux";
import Player from "./Player";
import { setPlay, playNext, playPrevious } from "../../redux-store/actions";

const mapStateToProps = ({ user: { songs }, player: { currentSong, play, songsInPlaylist } }) => ({
  songs,
  songsInPlaylist,
  currentSong,
  play
});

const mapDispatchToProps = (dispatch) => ({
  setPlay: (play) => dispatch(setPlay(play)),
  playNext: () => dispatch(playNext()),
  playPrevious: () => dispatch(playPrevious()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Player);