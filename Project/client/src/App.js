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
import Dashboard from './views/Dashboard';

function renderDashboard() {
  return (
    <Route path="/dashboard">
      <Dashboard />
    </Route>
  );
}

function renderPublic() {
  return (
    <>
      <TopHeader />
      <Box my={4}>
        <Container maxWidth="lg">
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/disaster/:id">
            <DisasterForm />
          </Route>
        </Container>
      </Box>
    </>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        {renderDashboard()}
        {renderPublic()}
      </Switch>
    </Router>
  );
}

export default App;
