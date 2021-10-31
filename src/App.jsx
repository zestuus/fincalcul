import React from 'react';
import { Switch } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import Unit from "./components/Unit";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/unit/:unitNumber" component={Unit} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
