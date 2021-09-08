import { connect } from "react-redux";
import Settings from "./Settings";
import { saveUserSettings } from "../../redux-store/actions";

const mapStateToProps = ({ user: { email, name, playlists, autoplay, defaultPlaylist, defaultVolume } }) => ({
  email,
  name,
  playlists,
  autoplay,
  defaultPlaylist,
  defaultVolume,
});


const mapDispatchToProps = (dispatch) => ({
  saveUserSettings: (settings) => dispatch(saveUserSettings(settings)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);