import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import { LOGOUT_USER } from "../../redux/actions";

const PrivateRoute = ({
  component: Component,
  token,
  expiresAt,
  isAuthenticated,
  logout,
  ...rest
}) => {
  const user = isAuthenticated;
  // console.log(user);
  useEffect(() => {
    if (!user) {
      //    logout();
    }
  });

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const mapStateToProps = ({ common }) => {
  return {
    token: common.token,
    expiresAt: common.expiresAt,
    isAuthenticated: common.isAuthenticated,
  };
};

const mapActionToProps = (dispatch) => {
  return {
    logout: () => dispatch({ type: LOGOUT_USER }),
  };
};

export default connect(mapStateToProps, mapActionToProps)(PrivateRoute);
