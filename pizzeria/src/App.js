import React from 'react';
import AppBarre from "./components/appBar";
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from "./pages/Home";
import Client from "./pages/Client";
import Proprio from "./pages/Proprio";

function App() {

  return (
    <div><AppBarre />
      <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/client">
              <Client />
            </Route>
            <Route path="/proprio">
              <Proprio />
            </Route>
          </Switch>
      </BrowserRouter></div>  
  );
}

export default App;
