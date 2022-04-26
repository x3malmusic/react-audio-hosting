import { connect } from "react-redux";
import Settings from "./Settings";
import { saveUserSettingsRoutine, savePlayerSettingsRoutine } from "../../redux-store/actions/routines";

const mapStateToProps = ({ user: { email, name }, player: { defaultVolume, rememberLastSong } }) => ({
  email,
  name,
  defaultVolume,
  rememberLastSong
});


const mapDispatchToProps = (dispatch) => ({
  saveUserSettings: (settings) => dispatch(saveUserSettingsRoutine(settings)),
  savePlayerSettings: (settings) => dispatch(savePlayerSettingsRoutine(settings)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);