import React from 'react';
import { Typography } from '@material-ui/core';

import Disasters from './components/Disasters';

export default function DisastersList() {
  // GET disasters from API
  const disasters = [
    { id: 1, title: "Plane crash on Tehran" },
    { id: 2, title: "Flood on Shiraz" }
  ]
  return (
    <>
      <Typography variant="h3" component="h2">Disasters</Typography>
      <Disasters disasters={disasters} />
    </>
  );
}