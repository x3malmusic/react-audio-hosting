import { connect } from "react-redux";
import AllSongsList from "./AllSongsList";
import { searchSongs } from "../../utils";

const mapStateToProps = ({ user: { songs }, player: { searchValue }}) => ({
  allSongs: searchSongs(searchValue, songs),
});

export default connect(mapStateToProps, null)(AllSongsList);