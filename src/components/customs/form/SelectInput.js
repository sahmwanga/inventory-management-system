import React from 'react';
import _ from 'lodash';

import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';

import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: '100%',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

function SelectInput(props) {
  const { label, name, touched, errors, onChange, options, ...rest } = props;

  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="type">{label}</InputLabel>

      <Select
        labelId={name}
        id={name}
        name={name}
        onChange={onChange}
        error={touched[name] && Boolean(errors[name])}
        helperText={touched[name] && errors[name]}
        {...rest}
      >
        {_.isArray(options) &&
          options.map(({ key, value }) => (
            <MenuItem value={value}>{key}</MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

export default SelectInput;
