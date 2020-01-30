import React from 'react';
import { useParams } from "react-router-dom";
import { Typography } from '@material-ui/core';

import Form from './components/Form';

export default function DisasterForm() {
  const { id } = useParams();
  // Validate id first

  const fields = [
    {
      "name": "name",
      "title": "First Name",
      "type": "text",
      "required": true
    },
    {
      "name": "lastName",
      "title": "Last Name",
      "type": "text",
      "required": true
    },
    {
      "name": "level",
      "title": "Level",
      "type": "select",
      "options": [
        {
          "value": "low",
          "text": "Low"
        },
        {
          "value": "medium",
          "text": "Medium"
        },
        {
          "value": "high",
          "text": "High"
        }
      ],
      "required": true
    },
    {
      "name": "injuredDeadCount",
      "title": "What is the number of injured or dead people in the region?",
      "type": "number",
      "required": false
    }
  ];
  return (
    <>
      <Typography variant="h3" component="h2">Disaster: {id}</Typography>
      <Form fields={fields} />
    </>
  );
}