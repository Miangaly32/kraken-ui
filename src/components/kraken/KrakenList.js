import React from 'react';
import { Button, Typography, TableHead, TableRow, Table, TableBody, TableCell } from '@material-ui/core';
import axios from "axios";

const KrakenList = (props) => {

    const select = (kraken) => {
        axios.get(`http://localhost:8000/kraken/${kraken.id}`)
            .then(res => {
                props.currentKraken(res.data)
            })
            .catch(err => {
                if (err.response) {
                    props.getErrors(err.response.data)
                }
            })
    }

    const krakenList = props.krakens.map(kraken => (
        <TableRow key={kraken.id}>
            <TableCell component="th" scope="row">
                {kraken.name}
            </TableCell>
            <TableCell >{kraken.age}</TableCell>
            <TableCell >{kraken.weight}</TableCell>
            <TableCell >{kraken.size}</TableCell>
            <TableCell ><Button size='small' color='primary' onClick={() => select(kraken)}> Sélectionner </Button> </TableCell>
        </TableRow>
    ))

    return (
        <div style={{ padding: 10, marginBottom: 10 }}>
            <Typography variant="h4" component="h2">
                Liste des krakens
            </Typography>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nom</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Poids(tonne)</TableCell>
                        <TableCell>Taille(metre)</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {krakenList}
                </TableBody>
            </Table>
        </div>
    )
}

export default KrakenList;