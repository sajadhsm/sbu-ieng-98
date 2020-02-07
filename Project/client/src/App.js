import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Container, Box } from '@material-ui/core';

import TopHeader from './components/TopHeader';
import Home from './views/Home';
import DisasterForm from './views/disasterForm';

function App() {
  return (
    <Router>
      <TopHeader />
      <Box my={4}>
        <Container maxWidth="lg">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/disaster/:id">
              <DisasterForm />
            </Route>
          </Switch>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
