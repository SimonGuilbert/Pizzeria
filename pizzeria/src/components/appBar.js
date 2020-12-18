import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
  },

  toolbar: {
    minHeight: 88,
    background: '#1e1e1e',
  },
}));

export default function AppBarre() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <a href='/'><img src="logoMenu.jpg"></img></a>
          <Box mx='auto'>
          <Typography variant="h3">
            The Crispy Crust Pizzeria
          </Typography></Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
