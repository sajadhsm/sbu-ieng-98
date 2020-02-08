import React from 'react';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default function Detail({ form }) {
  const { title, createdAt, fields } = form;
  return (
    <Box my={2}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>

          <Typography color="textSecondary" gutterBottom>
            Create Date: {new Date(createdAt).toLocaleString()}
          </Typography>

          <Typography variant="h6" component="h3">
            Fields
          </Typography>

          <ul>
            {fields.map(field => {
              return <li key={field.name}><b>{field.title}</b>  <small><i>{field.type}</i></small></li>
            })}
          </ul>
        </CardContent>
      </Card>
    </Box>
  );
}