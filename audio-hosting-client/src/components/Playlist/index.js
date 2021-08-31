import { connect } from "react-redux";
import Playlist from "./Playlist";
import { getSongs, setSong } from "../../redux-store/actions";

const mapStateToProps = ({ user: { songs }, player: { currentSong } }) => ({
  songs,
  currentSong
});

const mapDispatchToProps = (dispatch) => ({
  getSongs: () => dispatch(getSongs()),
  setSong: (song) => dispatch(setSong(song))
})

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);