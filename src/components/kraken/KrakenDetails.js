import React from 'react';
import { Box, Typography, Paper, TextField, FormGroup, TableHead, TableRow, Table, TableBody, TableCell } from '@material-ui/core';

const krakenDetails = ({ kraken }) => {
    let tentacles;
    let powers;

    if (kraken.tentacles !== undefined && kraken.tentacles.length > 0) {
        tentacles =
            kraken.tentacles.map((tentacle) => (
                <TableRow key={tentacle.id}>
                    <TableCell component="th" scope="row">
                        {tentacle.name}
                    </TableCell>
                    <TableCell align="right">{tentacle.pv}</TableCell>
                    <TableCell align="right">{tentacle.strength}</TableCell>
                    <TableCell align="right">{tentacle.con}</TableCell>
                    <TableCell align="right">{tentacle.dex}</TableCell>
                </TableRow>
            ))
    }
    if (kraken.powers !== undefined && kraken.powers.length > 0) {
        powers = kraken.powers.map((power) => (
            <TableRow key={power.id}>
                <TableCell component="th" scope="row">
                    {power.name}
                </TableCell>
                <TableCell align="right">{power.maxUsage}</TableCell>
            </TableRow>
        ))
        powers = kraken.powers.map(power => (
            <tr>
                <td>{power.name}</td>
                <td>{power.maxUsage}</td>
            </tr>)
        )
    }
    return (
        <Paper style={{ padding: 10, minHeight: '100vh' }}>
            <Typography variant="h4" component="h2">
                Détails du kraken
            </Typography>
            <FormGroup >
                <TextField
                    id="kraken-name"
                    label="Nom du kraken"
                    value={kraken.name}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="kraken-age"
                    label="Age"
                    value={kraken.age}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="kraken-weight"
                    label="Poids(tonne)"
                    value={kraken.weight}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="kraken-size"
                    label="Taille(metre)"
                    value={kraken.size}
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </FormGroup>
            <Box component="div" mt={10}>
                <Typography variant="h4" component="h4">
                    Tentacules
                </Typography>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nom</TableCell>
                            <TableCell align="right">Point de vie</TableCell>
                            <TableCell align="right">Force</TableCell>
                            <TableCell align="right">Constitution</TableCell>
                            <TableCell align="right">Dextérité</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tentacles}
                    </TableBody>
                </Table>
            </Box>
            <Box mt={10}>
                <Typography variant="h4" component="h4">
                    Pouvoirs
            </Typography>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nom</TableCell>
                            <TableCell align="right">Max utilisation</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {powers}
                    </TableBody>
                </Table>
            </Box>
        </Paper>
    )
}

export default krakenDetails;