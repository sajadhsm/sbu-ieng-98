import React, { useState } from 'react';
import { Button, Grid, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

import TextFormControl from './Controls/Text';
import SelectFormControl from './Controls/Select';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(3, 0, 0),
  },
}));

export default function Form({ formId, fields }) {
  const classes = useStyles();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const [form, setForm] = useState(() => {
    return fields.reduce((acc, cur) => {
      acc[cur.name] = cur.type === "text" ? ""
        : cur.type === "number" ? 0 : [];
      return acc
    }, {})
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // TODO: Validate the form

    const data = {
      form: formId,
      responses: Object.entries(form).map(field => ({
        name: field[0],
        value: field[1]
      }))
    };

    setIsSubmitting(true);
    axios
      .post('/reports/', data)
      .then(response => {
        console.log(response);
        setIsDone(true);
      })
      .catch(console.log)
      .finally(() => {
        setIsSubmitting(false);
      })
  }

  if (isDone) {
    return (
      <Alert severity="success">
        <AlertTitle>Thank you</AlertTitle>
        Form has been successfully submitted.
      </Alert>
    );
  }

  return (
    <form>
      <Grid container spacing={3}>
        {fields.map(field => (
          <Grid key={field.name} item xs={12}>
            {renderFieldByType(field, form, setForm)}
          </Grid>
        ))}
      </Grid>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleFormSubmit}
        className={classes.submit}
        size="large"
        disableElevation
        disabled={isSubmitting}
      >
        {!isSubmitting ? "Submit" : <CircularProgress size={30} />}
      </Button>
    </form>
  );
}

function renderFieldByType(field, form, setForm) {
  switch (field.type) {
    case "text":
      return <TextFormControl
        key={field.name}
        form={form}
        setForm={setForm}
        name={field.name}
        title={field.title}
        required={field.required} />

    case "number":
      return <TextFormControl
        key={field.name}
        form={form}
        setForm={setForm}
        name={field.name}
        title={field.title}
        required={field.required}
        isNumber />

    case "select":
      return <SelectFormControl
        key={field.name}
        form={form}
        setForm={setForm}
        name={field.name}
        title={field.title}
        options={field.options}
        required={field.required} />

    default:
      return null;
  }
}