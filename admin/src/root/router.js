import { Route, Switch } from "react-router-dom";
import { Board } from "../pages";
import React from "react";

export const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Board} />
    </Switch>
  );
};
