import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Routes,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Event from "./views/Event/Event";
// import Home from "./views/Home/Home";
// import Dashboard from "./views/Dashboard/Dashboard";
import NotFound from "./views/404/404";

const Home = lazy(() => import("./views/Home/Home"));
const Dashboard = lazy(() => import("./views/Dashboard/Dashboard"));

const App = () => {
  return (
    <Routes>
      <Switch>
        <Route path='/' exact>
          <Suspense fallback={<p>Loading...</p>}>
            <Home />
          </Suspense>
        </Route>
        <Route path='/add-event' exact>
          <Event />
        </Route>
        <Route path='/dashboard' exact>
          <Suspense fallback={<p>Loading...</p>}>
            <Dashboard />
          </Suspense>
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
