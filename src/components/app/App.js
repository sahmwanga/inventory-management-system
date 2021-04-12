import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { GlobalProvider } from '../../context/GlobalState';
import Stock from '../products/Stock';
import Reports from '../reports/Reports';
import Transactions from '../transactions/Transactions';
import ProductMaster from '../products/ProductMaster';
import Header from '../Header';
import Filters from '../filters/Filters';

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
