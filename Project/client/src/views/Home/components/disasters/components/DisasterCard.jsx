import React from 'react';
import { Card, CardContent, Typography, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

export default function DisasterCard(props) {
  const {
    disaster: {
      _id: id,
      title
    }
  } = props;

  return (
    <Link underline="none" component={RouterLink} to={`/disaster/${id}`}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2" align="center">
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
