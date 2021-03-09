import React from 'react';
import { Typography, Select, FormControl, MenuItem, InputLabel, Grid, Button } from '@material-ui/core';

const PowerAdd = () => {
    return (
        <div style={{ padding: 10, marginBottom: 10 }}>
            <Typography variant="h4" component="h2">
                Sélection du pouvoir à ajouter au kraken
            </Typography>

            <FormControl style={{ minWidth: 300 }}>
                <InputLabel id="demo-simple-select-label">Nom du pouvoir</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <Grid item style={{ marginTop: 16 }}>
                    <Button
                        type="button"
                        variant="contained"
                        color="primary"
                    >
                        Supprimer
              </Button>
                </Grid>
            </FormControl>
        </div>
    )
}

export default PowerAdd;