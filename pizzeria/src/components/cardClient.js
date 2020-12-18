import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    width: 515,
  },
  media: {
    height: 100,
  },
});

async function makeDeleteRequest(url) {

    let res = await axios.delete(url);
  
    return res;
  }

export default function MediaCard(element) {
  const classes = useStyles();


  return (
    <div style={{margin: 'auto'}}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={"uploads/"+element.element.name+".jpg"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {element.element.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {element.element.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        {element.element.price + ' €'}
        </Button>
        <Button size="small" color="secondary">
          Commander
        </Button>
      </CardActions>
    </Card></div>
  );
}