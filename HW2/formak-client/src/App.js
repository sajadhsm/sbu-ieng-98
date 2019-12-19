import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header'
import Home from './components/Home'
import Form from './components/Form'

import './assets/css/style.css'

function App() {
  return (
    <Router>
      <Header />

      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/form/:id">
            <Form />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
