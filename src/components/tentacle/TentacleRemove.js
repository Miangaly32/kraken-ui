import React, { useState } from 'react';
import { Typography, Select, FormControl, MenuItem, InputLabel, Grid, Button } from '@material-ui/core';
import axios from "axios";

const TentacleRemove = (props) => {

    const [id, setId] = useState();

    let tentacles;
    if (props.kraken.tentacles !== undefined && props.kraken.tentacles.length > 0) {
        tentacles = props.kraken.tentacles.map((tentacle) => (
            < MenuItem key={tentacle.id} value={tentacle.id}>{tentacle.name}</MenuItem>
        ))
    }

    const handleChange = (e) => {
        setId(e.target.value)
    }

    const remove = (e) => {
        e.preventDefault()
        axios.delete(`http://localhost:8000/kraken/${id}/tentacle`)
            .then(res => {
                props.currentKraken(res.data.kraken)
            })
            .catch(err => {
                if (err.response) {
                    props.getErrors(err.response.data.Errors)
                }
            })
    }

    return (
        <div style={{ padding: 10, marginBottom: 10 }}>
            <Typography variant="h4" component="h2">
                Sélection du tentacule à supprimer
            </Typography>

            <FormControl style={{ minWidth: 300 }}>
                <InputLabel id="label">Nom du tentacule</InputLabel>
                <Select
                    labelId="label"
                    id="id"
                    onChange={handleChange}
                >
                    {tentacles}
                </Select>
                <Grid item style={{ marginTop: 16 }}>
                    <Button
                        type="button"
                        variant="contained"
                        color="secondary"
                        onClick={remove}
                    >
                        Supprimer
              </Button>
                </Grid>
            </FormControl>
        </div >
    )
}

export default TentacleRemove;