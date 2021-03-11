import React, { useState, useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Header, Footer, KrakenList, KrakenCreate, KrakenDetails, TentacleAdd, TentacleRemove, PowerAdd } from './components';
//import './App.css';
import axios from "axios";

function App() {
  const [kraken, setKraken] = useState({ id: "", age: "", name: "", size: "", weight: "", tentacles: [], powers: [] });
  const [errors, setErrors] = useState('');

  const [krakens, setKrakens] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/krakens`)
      .then(res => {
        setKrakens(res.data)
      })
      .catch(err => {
        if (err.response) {
          getErrors(err.response.data)
        }
      })
  }, [])

  const addKrakenList = (kr) => {
    setKrakens([...krakens, kr])
  }

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

  if (kraken.id !== '') {
    let tentacleNb = kraken.tentacles.length;
    if (tentacleNb < 8) {
      addTentacle = <TentacleAdd kraken={kraken} getErrors={getErrors} currentKraken={currentKraken} />;
    }
    if (tentacleNb > 0) {
      removeTentacle = <TentacleRemove kraken={kraken} getErrors={getErrors} currentKraken={currentKraken} />;
    }


    let canAddPower = false;
    let krakenPowerNb = kraken.powers.length

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
    if (canAddPower) {
      addPower = <PowerAdd getErrors={getErrors} kraken={kraken} currentKraken={currentKraken} />
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
            <KrakenList krakens={krakens} currentKraken={currentKraken} getErrors={getErrors} />
            {hasError}
            <KrakenCreate addKrakenList={addKrakenList} getErrors={getErrors} currentKraken={currentKraken} />
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
