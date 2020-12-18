import React, {useState} from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Tooltip from '@material-ui/core/Tooltip';

async function makeGetRequest(url) {
    let res = await axios.get(url);
    let data = res.data;
    return data;
  }

export default function MenuDuJour() {
    
  const [pizzaDuJour, setPizzaDuJour] = useState('');
  const [boissonDuJour, setBoissonDuJour] = useState('');
  const [dessertDuJour, setDessertDuJour] = useState('');

  function getPizza() {
    makeGetRequest('http://localhost:3000/api/v1/pizzaDuJour')
    .then(( data ) => setPizzaDuJour(data.name))
    .catch((err) => console.log(err))
  }
  
  function getBoisson() {
    makeGetRequest('http://localhost:3000/api/v1/boissonDuJour')
    .then(( data ) => setBoissonDuJour(data.name))
    .catch((err) => console.log(err))
  }
  
  function getDessert() {
  makeGetRequest('http://localhost:3000/api/v1/dessertDuJour')
  .then(( data ) => setDessertDuJour(data.name))
  .catch((err) => console.log(err))
  }

  getPizza()
  getBoisson()
  getDessert()

  return (
    <div style={{width:'80%', margin:'auto'}}>
    <Box display="flex" flexDirection="row" p={1} m={1}>
    <Tooltip title={pizzaDuJour}><Box m='auto'><img src={'uploads/'+pizzaDuJour+'.jpg'} style={{height:'200px', width:'200px', marginLeft:'50px'}}></img></Box></Tooltip>
      <Box m='auto'><img src='plus.jpg' style={{height:'100px', width:'100px'}}></img></Box>
      <Tooltip title={boissonDuJour}><Box m='auto'><img src={'uploads/'+boissonDuJour+'.jpg'} style={{height:'200px', width:'200px'}}></img></Box></Tooltip>
      <Box m='auto'><img src='plus.jpg' style={{height:'100px', width:'100px'}}></img></Box>
      <Tooltip title={dessertDuJour}><Box m='auto'><img src={'uploads/'+dessertDuJour+'.jpg'} style={{height:'200px', width:'200px'}}></img></Box></Tooltip>
    </Box><br/>
    <div style={{textAlign:'center'}}>
      <Button variant="contained" color='primary' startIcon={<ShoppingCartIcon />} size="large">
        Commander 19.90 €
      </Button></div><br/> 
    </div>
  );
}