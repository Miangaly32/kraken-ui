import React, { useState, useEffect } from 'react';
import { Typography, Select, FormControl, MenuItem, InputLabel, Grid, Button } from '@material-ui/core';
import axios from "axios";

const PowerAdd = (props) => {

    const [powers, setPowers] = useState([]);
    const [power, setPower] = useState();

    const handleChange = (e) => {
        setPower(e.target.value)
    }
    const savePower = (e) => {
        axios.post(`http://localhost:8000/kraken/${props.kraken.id}/power/${power}`)
            .then(res => {
                props.currentKraken(res.data.kraken)

            })
            .catch(err => {
                if (err.response) {
                    props.getErrors(err.response.data)
                }
            })
    }

    useEffect(() => {
        props.getErrors('');
        axios.get(`http://localhost:8000/powers`)
            .then(res => {
                setPowers(res.data)
            })
            .catch(err => {
                if (err.response) {
                    props.getErrors(err.response.data)
                }
            })
    }, [])

    const listPowers = powers.map((power) => (
        < MenuItem key={power.id} value={power.id}>{power.name}</MenuItem>
    ))

    return (
        <div style={{ padding: 10, marginBottom: 10 }}>
            <Typography variant="h4" component="h2">
                Sélection du pouvoir à ajouter au kraken
            </Typography>

            <FormControl style={{ minWidth: 300 }}>
                <InputLabel id="power-label">Nom du pouvoir</InputLabel>
                <Select
                    labelId="power-label"
                    id="power-select"
                    onChange={handleChange}
                >
                    {listPowers}
                </Select>
                <Grid item style={{ marginTop: 16 }}>
                    <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        onClick={savePower}
                    >
                        Ajouter
              </Button>
                </Grid>
            </FormControl>
        </div>
    )
}

export default PowerAdd;