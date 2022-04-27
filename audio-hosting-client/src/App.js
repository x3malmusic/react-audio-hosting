import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Loader from "./components/Loader/Loader";
import { routes, publicRoutes } from "./routes";
import { LOGIN_PAGE, MAIN_PAGE } from "./routes/pathnames";
import { RefProvider } from "./context/PlayerContext";
import Player from "./components/Player";
import { silentLoginRoutine } from "./redux-store/actions/routines";


export default function App() {
  const isLoading = useSelector(state => state.loading[silentLoginRoutine.LOADING])
  const user = useSelector(state => state.user)

  if (isLoading) return <Loader/>

  if (!user.email && !isLoading) {
    return (
      <Switch>
        {publicRoutes.map(({ path, component  }) => (
          <Route
            key={path}
            path={path}
            component={component}
          />
        ))}
        <Redirect to={LOGIN_PAGE} />
      </Switch>
    )
  }

  return (
    <RefProvider>
      <MainLayout>
        <Switch>
          {routes.map(({ path, component, exact }) => (
            <Route
              key={path}
              path={path}
              component={component}
              exact={exact}
            />
          ))}
          <Redirect to={MAIN_PAGE} />
        </Switch>
      </MainLayout>

      <div>
        <Player />
      </div>
    </RefProvider>
  )
}