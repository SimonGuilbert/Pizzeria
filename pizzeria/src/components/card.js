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

  const handleDelete = (e) => {
    if (element.title == 'pizza')
      element.addPizzas(element.pizzas.filter((e) => e.id !== element.element.id));
    else if (element.title == 'boisson')
      element.addBoissons(element.boissons.filter((e) => e.id !== element.element.id));
    else if (element.title == 'dessert')
      element.addDesserts(element.desserts.filter((e) => e.id !== element.element.id));
    
    makeDeleteRequest("http://localhost:3000/api/v1/"+ element.title +"/" + element.element._id)
    .then((data) => console.log(data))
    .catch((err) => console.log(err)); 
  };

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
            {element.element.name+' - '+element.element.price+' €'}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {element.element.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Détails
        </Button>
        <Button size="small" onClick={handleDelete} color="secondary">
          Supprimer de la carte
        </Button>
      </CardActions>
    </Card></div>
  );
}