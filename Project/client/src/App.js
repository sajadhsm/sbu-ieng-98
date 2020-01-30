import React from 'react';
import { Container } from '@material-ui/core';

import DisastersList from './views/disasters';

function App() {
  return (
    <Container maxWidth="lg">
      <DisastersList />
    </Container>
  );
}

export default App;
