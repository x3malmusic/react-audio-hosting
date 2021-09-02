import React from 'react';
import { connect } from "react-redux";
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import ProtectedRoute from "./components/ProtectedRoute";
import { silentLogin } from "./redux-store/actions";
import { getToken } from "./utils/token";

function App({ silentLogin }) {

  if (getToken()) silentLogin()

  return (
    <>
      <ReactNotification />
      <ProtectedRoute />
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  silentLogin: () => dispatch(silentLogin()),
})

export default connect(null, mapDispatchToProps)(App);