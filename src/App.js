import React from "react";
import {
  BrowserRouter as Routes,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Home from "./views/Home/Home";
import Event from "./views/Event/Event";
import Dashboard from "./views/Dashboard/Dashboard";
import NotFound from "./views/404/404";

const App = () => {
  return (
    <Routes>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/add-event' exact>
          <Event />
        </Route>
        <Route path='/dashboard' exact>
          <Dashboard />
        </Route>
        <Route path='/404' exact>
          <NotFound />
        </Route>
        <Redirect to='/404' />
      </Switch>
    </Routes>
  );
};

export default App;
