import React, { useState } from 'react';
import { Typography, Button, FormControl, Grid, InputLabel, Input } from '@material-ui/core';
import axios from "axios";

const TentacleAdd = (props) => {
    const [name, setName] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    props.getErrors('');

    const saveTentacle = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/kraken/${props.kraken.id}/tentacle`, { name: name })
            .then(res => {
                props.currentKraken(res.data.kraken)
            })
            .catch(err => {
                if (err.response) {
                    props.getErrors(err.response.data.Errors)
                }
            })

        setName('')
    }
    return (
        <div style={{ padding: 10, marginBottom: 10 }}>
            <Typography variant="h4" component="h2">
                Ajouter un tentacule au kraken
            </Typography>
            <FormControl>
                <InputLabel htmlFor="name">Nom du tentacule</InputLabel>
                <Input id="name" value={name} onChange={handleNameChange} />
                <Grid item style={{ marginTop: 16 }}>
                    <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        onClick={saveTentacle}
                    >
                        Ajouter
              </Button>
                </Grid>
            </FormControl>
        </div>
    )
}

export default TentacleAdd;