import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from '@material-ui/core';

const TransactionFilter = ({ filterOptions, filterCallback, filterValue }) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend" color="secondary">
        Show Transactions
      </FormLabel>
      <RadioGroup
        aria-label="transactions"
        name="transactions"
        value={filterValue}
        onChange={(e) => filterCallback(e.target.value)}
      >
        <Grid container>
          <Grid item xs>
            <FormControlLabel value="all" control={<Radio />} label="All" />
          </Grid>
          <Grid item xs>
            <FormControlLabel value="sales" control={<Radio />} label="Sales" />
          </Grid>
          <Grid item xs>
            <FormControlLabel
              value="purchases"
              control={<Radio />}
              label="Purchases"
            />
          </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>
  );
};

export default TransactionFilter;
