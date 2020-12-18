import React, {useState, useEffect} from "react";
import MenuDuJour from '../components/menuDuJour';
import TabsCarte from '../components/tabsClient';
import axios from 'axios';

async function makeGetRequest(url) {
  let res = await axios.get(url);
  let data = res.data;
  return data;
}

function Client() {

  const [pizzas, addPizzas] = useState([]);
  const [boissons, addBoissons] = useState([]);
  const [desserts, addDesserts] = useState([]);

  useEffect(() => {
    fetch('pizzas', addPizzas);
    fetch('boissons', addBoissons);
    fetch('desserts', addDesserts);
  }, []);

  const fetch = (elem,tab) => {
    makeGetRequest('http://localhost:3000/api/v1/'+elem)
    .then(( data ) => tab(data))
    .catch((err) => console.log(err))
  }

return (
  <div>
    <h1 style = {{marginLeft:'5%'}}>Aujourd'hui, nous vous proposons</h1>
    <MenuDuJour/>
    <h1 style = {{marginLeft:'5%'}}>Carte du Restaurant</h1>
    {pizzas.length>0 || boissons.length>0 || desserts.length>0 ? <TabsCarte listElements={[pizzas,boissons,desserts]} pizzas={pizzas} addPizzas={addPizzas} boissons={boissons} addBoissons={addBoissons} desserts={desserts} addDesserts={addDesserts}/> : null}
  </div>
);
}
export default Client;