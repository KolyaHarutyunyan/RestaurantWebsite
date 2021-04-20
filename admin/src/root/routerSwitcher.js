/* [implement] */
import React from "react";
// import { Redirect, Route, Switch } from "react-router-dom";
import { Router } from "./router";
// import { LoginPage } from "@eachbase/pages";
// import { useSelector } from "react-redux";

export const RouterSwitcher = () => {
  // const { accessToken } = useSelector((state) => ({
  //   accessToken: state.auth.accessToken,
  //   isAuthenticated: state.auth.isAuthenticated,
  // }));

  // const Token = accessToken
  //   ? accessToken
  //   : localStorage.getItem("access-token");

  return (
    <React.Fragment>
      {/* {!Token ? (
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <Redirect to={"/login"} />
        </Switch>
      ) : ( */}
      <Router />
      {/* )} */}
    </React.Fragment>
  );
};
