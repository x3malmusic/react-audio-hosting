import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Loader from "../Loader/Loader";
import { routes, publicRoutes } from "../../routes";
import { Redirect, Route, Switch } from "react-router-dom";
import { RefProvider } from "../../context";
import Player from "../Player";


export default function ProtectedRoute({ user, loading }) {

  if (loading) return <Loader/>

  if (!user.email && !loading) {
    return (
      <Switch>
        {publicRoutes.map(({ path, component  }) => (
          <Route
            key={path}
            path={path}
            component={component}
          />
        ))}
        <Redirect to="/login" />
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
          <Redirect to="/" />
        </Switch>
      </MainLayout>

      <div>
        <Player />
      </div>
    </RefProvider>
  )
}