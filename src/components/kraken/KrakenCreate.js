import React, { useState } from 'react';
import { FormGroup, Typography, Button, FormControl, Grid, InputLabel, TextField, Input } from '@material-ui/core';
import axios from "axios";

const KrakenCreate = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [size, setSize] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleAgeChange = (e) => {
        setAge(e.target.value)
    }
    const handleWeightChange = (e) => {
        setWeight(e.target.value)
    }
    const handleSizeChange = (e) => {
        setSize(e.target.value)
    }


    const saveKraken = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/kraken`, { name: name, age: age, weight: weight, size: size })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        setName('')
        setAge('')
        setWeight('')
        setSize('')
    }

    return (
        <div style={{ padding: 10, marginBottom: 10 }}>
            <Typography variant="h4" component="h2">
                Ajouter un nouveau kraken
            </Typography>
            <FormGroup >
                <TextField id="name" label="Nom du kraken" value={name} onChange={handleNameChange} />
                <TextField id="age" label="Age" value={age} onChange={handleAgeChange} />
                <TextField id="weight" label="Poids (tonne)" value={weight} onChange={handleWeightChange} />
                <TextField id="size" label="Taille (metre)" value={size} onChange={handleSizeChange} />
                <Grid item style={{ marginTop: 16 }}>
                    <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        onClick={saveKraken}
                    >
                        Ajouter
                  </Button>
                </Grid>
            </FormGroup>
        </div>
    )
}

export default KrakenCreate;