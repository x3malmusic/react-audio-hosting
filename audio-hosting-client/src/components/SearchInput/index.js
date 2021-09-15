import { connect } from "react-redux";
import SearchInput from "./SearchInput";
import { setSearchValue } from "../../redux-store/actions";

const mapDispatchToProps = (dispatch) => ({
  setSearch: (value) => dispatch(setSearchValue(value)),
})

export default connect(null, mapDispatchToProps)(SearchInput);