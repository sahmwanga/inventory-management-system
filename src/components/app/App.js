import React, { useState } from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { GlobalProvider } from '../../context/GlobalState';
import { ProductProvider } from '../../context/ProductState';
import Stock from '../products/Stock';
import Reports from '../reports/Reports';
import Transactions from '../transactions/Transactions';
import ProductMaster from '../products/ProductMaster';
import Header from '../Header';
import Filters from '../filters/Filters';
import {
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
} from '@material-ui/core';

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: { main: '#00796b' },
    secondary: {
      main: '#ffccdd',
      light: '#0066ff',
      contrastText: '#ffcc00',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#00796b' },
    secondary: {
      main: '#ffccdd',
      light: '#0066ff',
      contrastText: '#ffcc00',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default function App() {
  const [isThemeLight, setTheme] = useState(true);

  return (
    <MuiThemeProvider theme={isThemeLight ? lightTheme : darkTheme}>
      <GlobalProvider>
        <Header />
        <button onClick={() => setTheme(!!false)}>theme</button>
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
          {/*<Reports />*/}
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
    </MuiThemeProvider>
  );
}
