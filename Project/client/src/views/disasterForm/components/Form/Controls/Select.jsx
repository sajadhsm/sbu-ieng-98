import React, { useRef, useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 120,
  },
}));

export default function SelectFormControl(props) {
  const { name, title, options, required, form, setForm } = props;
  const classes = useStyles();

  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = (event) => {
    const newVal = event.target.value;
    setForm({
      ...form,
      [name]: newVal
    })
  }

  return (
    <FormControl className={classes.formControl} required={required} variant="outlined" fullWidth>
      <InputLabel ref={inputLabel} id={name}>{title}</InputLabel>
      <Select
        labelId={name}
        id={`${name}-select`}
        value={form[name]}
        onChange={handleChange}
        labelWidth={labelWidth}
      >
        {options.map(option => (
          <MenuItem key={option.text} value={option.value}>{option.text}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}