import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Typography, Container, Card, CardContent } from '@material-ui/core';

import Form from './components/Form';

export default function DisasterForm() {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios
      .get(`/forms/${id}/`)
      .then(response => {
        setForm(response.data);
        setIsFetching(false);
      })
      .catch(error => {
        setIsFetching(false);
      });
  }, [id]);


  if (isFetching) {
    return "LOADING...";
  }

  if (!form) {
    return "Sorry, no form found!"
  }

  const { title, fields } = form;

  return (
    <Container maxWidth="md" disableGutters>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">{title}</Typography>
          <Form fields={fields} />
        </CardContent>
      </Card>
    </Container>
  );
}