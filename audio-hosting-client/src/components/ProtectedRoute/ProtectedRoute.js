import React, { useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import { routes, publicRoutes } from "../../routes";
import { Redirect, Route, Switch } from "react-router-dom";

export default function ProtectedRoute({ user, silentLogin }) {

  useEffect(() => {
    if (!user.email) silentLogin()
  }, [silentLogin, user])

  if (!user) {
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