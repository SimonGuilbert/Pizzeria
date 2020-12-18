import React from "react";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import '../style/Home.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
  <div className='divHome'>
    <Box pt={10} fontWeight="fontWeightBold"><Typography className='bienvenue' variant="h4">BIENVENUE</Typography></Box>
    <div className='boutons'>
    <div className={classes.root}>
      <Button className='bouton' variant="contained" color="secondary" href="/client">
      <Typography>
        <p className='small'>vous êtes</p>
        <p className='big'>client</p>
        <p className='small'>vite, ça va refroidir !</p>
      </Typography>

      </Button>

      <Button className='bouton' variant="contained" color="primary" href="/proprio">
      <Typography>
      <p className='small'>vous êtes</p>
        <p className='big'>propriétaire</p>
        <p className='small'>c'est ici que ça se passe</p>
      </Typography>
      </Button>
  </div></div></div>
);
}