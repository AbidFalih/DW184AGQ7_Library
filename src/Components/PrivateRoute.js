import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { BookContext } from "../Context/bookContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [state] = useContext(BookContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        state.isLogin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
