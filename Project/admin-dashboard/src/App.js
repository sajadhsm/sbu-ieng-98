import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";

import Layout from './shared/components/Layout';
import Routes from './Routes';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
}

export default App;
