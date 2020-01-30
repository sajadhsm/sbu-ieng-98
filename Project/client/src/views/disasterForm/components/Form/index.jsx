import React, { useState } from 'react';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TextFormControl from './Controls/Text';
import SelectFormControl from './Controls/Select';

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(3, 0, 0),
  },
}));

export default function Form({ fields }) {
  const classes = useStyles();

  const [form, setForm] = useState(() => {
    return fields.reduce((acc, cur) => {
      acc[cur.name] = cur.type === "text" ? ""
        : cur.type === "number" ? 0 : [];
      return acc
    }, {})
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  }

  return (
    <form>
      {/* {fields.map(field => {
        return renderFieldByType(field, form, setForm)
      })} */}

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
      >
        Submit
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