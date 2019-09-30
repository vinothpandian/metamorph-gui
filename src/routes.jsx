import React from "react";
import { Switch, Route } from "react-router";
import Error from "./screens/Error";
import Home from "./screens/Home";
import TryItOut from "./screens/TryItOut";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/try-it-out" component={TryItOut} />
      <Route component={Error} />
    </Switch>
  );
}

export default Routes;
