import React, { useLayoutEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import Loader from "../Loader/Loader";
import { routes, publicRoutes } from "../../routes";
import { Redirect, Route, Switch } from "react-router-dom";
import { getToken } from "../../utils/token";

export default function ProtectedRoute({ user, silentLogin, loading }) {

  useLayoutEffect(() => {
    if (getToken()) silentLogin()
  }, [silentLogin])

  if (loading) return <Loader />

  if (!user.email) {
    return (
      <Switch>
        {publicRoutes.map(({ path, component  }) => (
          <Route
            key={path}
            path={path}
            component={component}
          />
        ))}
      </Switch>
    )
  }

  return (
    <MainLayout>
      {routes.map(({ path, component, exact }) => (
        <Route
          key={path}
          path={path}
          component={component}
          exact={exact}
        />
      ))}
      <Redirect to="/" />
    </MainLayout>
  )
}