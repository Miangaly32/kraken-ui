import React, { useState, useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Header, Footer, KrakenCreate, KrakenDetails, TentacleAdd, TentacleRemove, PowerAdd } from './components';
//import './App.css';
import axios from "axios";

function App() {
  const [kraken, setKraken] = useState({ id: "", age: "", name: "", size: "", weight: "", tentacles: [], powers: [] });
  const [errors, setErrors] = useState('');

  useEffect(() => {
    if (kraken.id) {
      axios.get(`http://localhost:8000/kraken/` + kraken.id)
        .then(res => {
          setKraken(res.data);
        })
        .catch(err => {
          if (err.response) {
            setErrors(err.response.data.Errors);
          }
        })
    }
  }, []);

  const currentKraken = (kr) => {
    setKraken(kr);
  }

  const getErrors = (err) => {
    setErrors(err);
  }

  let hasError;
  if (errors) {
    hasError = <Alert severity="error">{errors}</Alert>;
  }

  let addTentacle;
  let removeTentacle;
  let addPower;

  if (kraken.id) {
    addTentacle = <TentacleAdd kraken={kraken} getErrors={getErrors} />;


    let canAddPower = false;

    if (kraken.powers !== undefined && kraken.tentacles !== undefined) {
      let krakenPowerNb = kraken.powers.length;
      let tentacleNb = kraken.tentacles.length;

      if (tentacleNb > 0) {
        removeTentacle = <TentacleRemove kraken={kraken} />;
      }

      if (krakenPowerNb === 0) {
        canAddPower = true;
      } else if (krakenPowerNb === 1) {
        if (tentacleNb >= 4) {
          canAddPower = true;
        }
      } else if (krakenPowerNb === 2) {
        if (tentacleNb >= 8) {
          canAddPower = true;
        }
      }
    }
    if (canAddPower) {
      addPower = <PowerAdd kraken={kraken} />
    }
  }

  return (
    <Grid
      container
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
            {hasError}
            <KrakenCreate getErrors={getErrors} currentKraken={currentKraken} />
            {addTentacle}
            {removeTentacle}
            {addPower}
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <KrakenDetails
            kraken={kraken}
          />
        </Grid>

      </Grid>
      <Footer />
    </Grid >
  );
}

export default App;
