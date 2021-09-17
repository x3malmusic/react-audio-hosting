import { connect } from "react-redux";
import Settings from "./Settings";
import { saveUserSettings, savePlayerSettings } from "../../redux-store/actions";

const mapStateToProps = ({ user: { email, name }, player: { defaultVolume, rememberLastSong } }) => ({
  email,
  name,
  defaultVolume,
  rememberLastSong
});


const mapDispatchToProps = (dispatch) => ({
  saveUserSettings: (settings) => dispatch(saveUserSettings(settings)),
  savePlayerSettings: (settings) => dispatch(savePlayerSettings(settings)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);