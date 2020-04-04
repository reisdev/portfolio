import React from "react";

import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";

export default function Router() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Redirect from="*" to="/" />
      </Switch>
    </HashRouter>
  );
}
