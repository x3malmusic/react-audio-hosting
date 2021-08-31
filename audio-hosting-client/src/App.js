import React from 'react';
import { Route } from "react-router-dom";
import { Box } from "@material-ui/core";
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import routes from "./routes";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import RouterView from "./components/RouterView/RouterView";

function App() {
  return (
    <>
      <ReactNotification />
      <Header />
      <Box display="flex">
        <Sidebar />
        <RouterView>
          {routes.map(({ path, component, exact }) => (
            <Route
              key={path}
              path={path}
              component={component}
              exact={exact}
            />
          ))}
        </RouterView>
      </Box>
    </>
  );
}

export default App;
