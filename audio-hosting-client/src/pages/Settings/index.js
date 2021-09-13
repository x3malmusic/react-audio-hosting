import { connect } from "react-redux";
import Settings from "./Settings";
import { saveUserSettings, savePlayerSettings } from "../../redux-store/actions";

const mapStateToProps = ({ user: { email, name, playlists }, player: { defaultPlaylist, defaultVolume, rememberLastSong } }) => ({
  email,
  name,
  playlists,
  defaultPlaylist,
  defaultVolume,
  rememberLastSong
});


const mapDispatchToProps = (dispatch) => ({
  saveUserSettings: (settings) => dispatch(saveUserSettings(settings)),
  savePlayerSettings: (settings) => dispatch(savePlayerSettings(settings)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);