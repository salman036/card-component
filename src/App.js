import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardStack from "./Container/CardStackContainer";
import TableData from './Component/List/Table/index';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FormStack from '../src/Component/List/FormStack/index'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Switch>
            <Route path="/information" component={FormStack} />
            <Route path="/table" component={TableData} />
            <Route path="/" component={CardStack} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
