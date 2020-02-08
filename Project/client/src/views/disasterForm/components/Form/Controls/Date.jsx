import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


export default function DateFormControl(props) {
  const { name, title, form, setForm } = props;

  const handleChange = (date) => {
    setForm({
      ...form,
      [name]: date.toISOString()
    })
  }

  const value = form[name] ? new Date(form[name]) : new Date();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        margin="normal"
        fullWidth
        inputVariant="outlined"
        id={name}
        label={title}
        format="MM/dd/yyyy"
        value={value}
        onChange={handleChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
}