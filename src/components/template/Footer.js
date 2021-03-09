import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, AppBar, Toolbar } from '@material-ui/core';

const menuStyle = makeStyles({
    root: {
        justifyContent: "space-evenly"
    }
});

const footer = () => {
    const menuClasses = menuStyle();
    return (
        <AppBar position="static" color="default">
            <Toolbar className={menuClasses.root}>
                <Typography variant="body1" color="inherit">
                    © 2021 Kraken UI
              </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default footer;