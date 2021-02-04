import React from "react";
import { BrowserRouter as Redirect, Route } from "react-router-dom";

// Gestion d'accès des utilisateurs en fonctions de leurs autorisations.
const ProtectedRoute = ({ isAuth: isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuth ? (
          <Component />
        ) : (
          <Redirect to={{ path: "/", state: { from: props.location } }} />
        );
      }}
    />
  );
};

export default ProtectedRoute;
