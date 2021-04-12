import React from 'react';

import { Card, Typography, Grid, Button, CardContent } from '@material-ui/core';
import FormikControl from '../customs/form/FormikControl';

function Filters() {
  return (
    <Card>
      <CardContent>
        <Typography>Filters</Typography>
        <Grid container spacing={4}>
          <Grid item>
            <FormikControl
              control="date"
              label="Date"
              name="date"
              onChange={() => {}}
            />
          </Grid>
          <Grid item>
            <label>End Date</label>
            <input type="date" />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              Refresh
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Filters;
