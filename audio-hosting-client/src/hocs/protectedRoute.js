import React, {useState} from "react";
import MainLayout from "../layouts/MainLayout";
import { routes, publicRoutes } from "../routes";
import { Redirect, Route, Switch } from "react-router-dom";

export default function ProtectedRoute() {
  const [auth, setAuth] = useState(false)

  if (!auth) {
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