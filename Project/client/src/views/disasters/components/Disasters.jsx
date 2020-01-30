import React from 'react';
import { Grid } from '@material-ui/core';

import DisasterCard from './DisasterCard';

export default function Disasters({ disasters }) {
  return (
    <Grid container spacing={3}>
      {disasters.map(disaster => (
        <Grid key={disaster.id} item xs={12} md={6} lg={3}>
          <DisasterCard disaster={disaster} />
        </Grid>
      ))}
    </Grid>
  );
}