import React from 'react';
import {
  Container,
  Card,
  Typography,
  Grid,
  Button,
  CardContent,
  Box,
} from '@material-ui/core';
import { GlobalProvider } from './context/GlobalState';
import Stock from './components/Stock';
import Reports from './components/Reports';
import Transactions from './components/Transactions';
import ProductMaster from './components/ProductMaster';
import Header from './components/Header';

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <Box my={2} />
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={10}>
            <Filters />
          </Grid>
          <Grid item xs={12} md={2}>
            <ProductMaster />
          </Grid>
        </Grid>
        <Reports />
        <Grid container spacing={4}>
          <Grid item sm={12} md={4}>
            <Stock />
          </Grid>
          <Grid item sm={12} md={8}>
            <Transactions />
          </Grid>
        </Grid>
      </Container>
    </GlobalProvider>
  );
}

const Filters = () => {
  console.log('Filters');
  return (
    <Card>
      <CardContent>
        <Typography>Filters</Typography>
        <Grid container spacing={4}>
          <Grid item>
            <label>Start Date</label>
            <input type="date" />
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
};
