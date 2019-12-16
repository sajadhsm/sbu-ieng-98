import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home'
import Form from './components/Form'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/form/:id">
          <Form />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
