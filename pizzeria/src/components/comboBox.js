/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import SaveIcon from '@material-ui/icons/Save';

async function makePostRequest(url) {
  let res = await axios.post(url);
  return res;
}

export default function ComboBox({listElements}) {

  function getIdPizza(){
    let result = '';
    listElements[0].forEach(element => {
      if (element.name == document.getElementById('cb-pizza').value){
        result = element._id;
      }
    });
    
    return result;
  }

  function getIdBoisson(){
    let result = '';
    listElements[1].forEach(element => {
      if (element.name == document.getElementById('cb-boisson').value){
        result = element._id;
      }
    });
    
    return result;
  }

  function getIdDessert(){
    let result = '';
    listElements[2].forEach(element => {
      if (element.name == document.getElementById('cb-dessert').value){
        result = element._id;
      }
    });
    
    return result;
  }

  const listePizzas = []
  const listeBoissons = []
  const listeDesserts = []

  listElements[0].forEach(function(pizza){
    listePizzas.push({'title':pizza.name});
  });

  listElements[1].forEach(function(boissons){
    listeBoissons.push({'title':boissons.name});
  });

  listElements[2].forEach(function(desserts){
    listeDesserts.push({'title':desserts.name});
  });

  const handleClick = (e) => {
    
    makePostRequest('http://localhost:3000/api/v1/pizza/'+getIdPizza())
      .then(( data ) => console.log(data))
      .catch((err) => console.log(err));
      console.log('BOISSON')
    console.log(getIdBoisson())
    makePostRequest('http://localhost:3000/api/v1/boisson/'+getIdBoisson())
    .then(( data ) => console.log(data))
    .catch((err) => console.log(err));

    makePostRequest('http://localhost:3000/api/v1/dessert/'+getIdDessert())
    .then(( data ) => console.log(data))
    .catch((err) => console.log(err));
    
   console.log('http://localhost:3000/api/v1/pizza/'+getIdPizza())
   console.log(getIdPizza())
  }

  return (
    <div>
      <div style={{border:'2px solid', width:'60%', margin:'auto'}}>
    <Box display="flex" flexDirection="row" p={1} m={1}>
      <Box m="auto">
    <Autocomplete
      id="cb-pizza"
      name='pizza'
      options={listePizzas}
      getOptionLabel={(option) => option.title}
      style={{ width: 200 }}
      renderInput={(params) => 
      <TextField {...params} 
      label='Pizza'
      variant="outlined"
      style={{
          backgroundColor: "#aba6a6"
      }} 
      color="secondary" />}
      />
      
    </Box>

    <Box m="auto">
    <Autocomplete
      id="cb-boisson"
      name='boisson'
      options={listeBoissons}
      getOptionLabel={(option) => option.title}
      style={{ width: 200 }}
      renderInput={(params) => 
      <TextField {...params} 
      label='Boisson'
      variant="outlined"
      style={{
          backgroundColor: "#aba6a6"
      }} 
      color="secondary" />}
      /></Box>

    <Box m="auto">
    <Autocomplete
      id="cb-dessert"
      name='dessert'
      options={listeDesserts}
      getOptionLabel={(option) => option.title}
      style={{ width: 230 }}
      renderInput={(params) => 
      <TextField {...params} 
      label='Dessert'
      variant="outlined"
      style={{
          backgroundColor: "#aba6a6"
      }} 
      color="secondary" />}
      />
    </Box>
    </Box>

      <div style={{textAlign:'center'}}>
    <br/><Button variant="contained" color='primary' onClick={handleClick} startIcon={<SaveIcon />}>
      Enregistrer le menu du jour
    </Button></div><br/>
    
    </div></div>



      
);
}


