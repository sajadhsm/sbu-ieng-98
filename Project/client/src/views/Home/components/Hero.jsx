import React from 'react';
import { Box, Typography } from '@material-ui/core';

export default function Hero() {
  return (
    <Box component="section" textAlign="center" py={12}>
      <Typography gutterBottom variant="h2" component="h1" color="primary">
        <b>Kritical</b>
      </Typography>

      <Typography variant="h6" component="p" color="textSecondary">
        A crisis management system to make critical situations <b>kritical</b>
      </Typography>
    </Box>
  );
}