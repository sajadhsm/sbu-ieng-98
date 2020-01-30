import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Container } from '@material-ui/core';

import DisastersList from './views/disasters';
import DisasterForm from './views/disasterForm';

function App() {
  return (
    <Router>
      <Container maxWidth="lg">
        <Switch>
          <Route path="/disaster/:id">
            <DisasterForm />
          </Route>

          <Route path="/">
            <DisastersList />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
