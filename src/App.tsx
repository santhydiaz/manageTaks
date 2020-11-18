import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Task } from "./components/Task/index";
import { Header } from "./components/Header/index";
import { Home } from "./components/Home/index";
import { NoFound } from "./widgets";

export const App = (): JSX.Element => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/task">
          <Task />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/">
          <NoFound />
        </Route>
      </Switch>
    </Router>
  );
};
