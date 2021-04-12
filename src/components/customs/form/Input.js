import React from 'react';
import { TextField } from '@material-ui/core';

function Input(props) {
  const { label, name, touched, errors, onChange, ...rest } = props;
  return (
    <TextField
      fullWidth
      id={name}
      name={name}
      label={label}
      onChange={onChange}
      error={touched[name] && Boolean(errors[name])}
      helperText={touched[name] && errors[name]}
      {...rest}
    />
  );
}

export default Input;
