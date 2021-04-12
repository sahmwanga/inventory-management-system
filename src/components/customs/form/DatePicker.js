import React from 'react';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
function DateSelector(props) {
  const { label, name, onChange, ...rest } = props;

  return (
    <KeyboardDatePicker
      disableToolbar
      variant="inline"
      format="MM/dd/yyyy"
      margin="normal"
      id="date"
      label="Date"
      name="date"
      onChange={onChange}
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
    />
  );
}

export default DateSelector;
