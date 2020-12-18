import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Message(message,setMessage) {
    const classes = useStyles();


  const handleClose = (event) => {
    message.setMessage('');
};

  return (
    <div className={classes.root}>
      <Alert onClose={handleClose} severity ="success" style={{width:'50%', margin:'auto'}}>Votre image a bien été chargée</Alert>
    </div>
  );
}
