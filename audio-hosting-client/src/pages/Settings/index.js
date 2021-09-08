import { connect } from "react-redux";
import Settings from "./Settings";
import { register } from "../../redux-store/actions";

const mapStateToProps = ({ user: { email, name, playlists } }) => ({
  email,
  name,
  playlists
});


const mapDispatchToProps = (dispatch) => ({
  register: (creds) => dispatch(register(creds)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);