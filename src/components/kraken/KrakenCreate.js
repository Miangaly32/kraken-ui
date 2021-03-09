import React from 'react';
import { Typography, Button, FormControl, Grid, InputLabel, Input } from '@material-ui/core';

const KrakenCreate = () => {
    return (
        <div style={{ padding: 10, marginBottom: 10 }}>
            <Typography variant="h4" component="h2">
                Ajouter un nouveau kraken
                </Typography>
            <FormControl>
                <InputLabel htmlFor="name">Nom du kraken</InputLabel>
                <Input id="name" />
                <Grid item style={{ marginTop: 16 }}>
                    <Button
                        type="button"
                        variant="contained"
                        color="primary"
                    >
                        Ajouter
                  </Button>
                </Grid>
            </FormControl>
        </div>
    )
}

export default KrakenCreate;