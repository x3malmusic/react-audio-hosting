import { connect } from "react-redux";
import Header from "./Header";

const mapStateToProps = ({ user: { userMoney, userBitcoins, bitCoinRatio } }) => ({
  userMoney,
})

export default connect(mapStateToProps, null)(Header)