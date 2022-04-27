import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";

import { history } from "./utils/history";
import theme from "./utils/theme";
import store from "./redux-store";
import "./index.css";
import MainEntry from "./MainEntry";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <MainEntry />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
