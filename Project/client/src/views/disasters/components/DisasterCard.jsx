import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

export default function DisasterCard(props) {
  const { disaster } = props;

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {disaster.title}
        </Typography>
      </CardContent>
    </Card>
  );
}
