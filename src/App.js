import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { Header, Footer, KrakenCreate, KrakenDetails, TentacleAdd, TentacleRemove, PowerAdd } from './components';
//import './App.css';

function App() {
  return (
    <Grid
      container
      spacing={50}
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Header />
      <Grid
        container
        style={{ minHeight: '100vh', padding: '6em' }}
        spacing={2}
      >
        <Grid
          item
          xs={6}
        >
          <Paper >
            <KrakenCreate />
            <TentacleAdd />
            <TentacleRemove />
            <PowerAdd />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <KrakenDetails />
        </Grid>

      </Grid>
      <Footer />
    </Grid >
  );
}

export default App;
