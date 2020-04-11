import React from "react";

import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Menu from "../components/menu";
import Home from "./Home";
import Blog from "./Blog";

export default function Router() {
  return (
    <HashRouter>
      <Menu />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/blog" component={Blog} exact />
        <Redirect from="*" to="/" />
      </Switch>
    </HashRouter>
  );
}
