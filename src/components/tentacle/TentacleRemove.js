import React from 'react';
import { Typography, Select, FormControl, MenuItem, InputLabel, Grid, Button } from '@material-ui/core';

const TentacleRemove = ({ kraken }) => {
    let tentacles;
    if (kraken.tentacles !== undefined && kraken.tentacles.length > 0) {
        tentacles = kraken.tentacles.map((tentacle) => (
            < MenuItem key={tentacle.id} value={tentacle.id}>{tentacle.name}</MenuItem>
        ))
    }

    return (
        <div style={{ padding: 10, marginBottom: 10 }}>
            <Typography variant="h4" component="h2">
                Sélection du tentacule à supprimer
            </Typography>

            <FormControl style={{ minWidth: 300 }}>
                <InputLabel id="demo-simple-select-label">Nom du tentacule</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                >
                    {tentacles}
                </Select>
                <Grid item style={{ marginTop: 16 }}>
                    <Button
                        type="button"
                        variant="contained"
                        color="secondary"
                    >
                        Supprimer
              </Button>
                </Grid>
            </FormControl>
        </div >
    )
}

export default TentacleRemove;