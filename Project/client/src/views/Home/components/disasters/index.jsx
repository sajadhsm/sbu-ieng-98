import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@material-ui/core';

import Disasters from './components/Disasters';

export default function DisastersList() {
  const [disasters, setDisasters] = useState([]);

  useEffect(() => {
    axios
      .get('/forms/')
      .then(response => {
        setDisasters(response.data);
      })
      .catch(console.log);
  }, []);

  return (
    <>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom>
        Disasters
      </Typography>
      <Disasters disasters={disasters} />
    </>
  );
}