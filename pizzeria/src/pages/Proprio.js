import React, {useState, useEffect} from 'react';
import '../style/Proprio.css'
import ComboBox from '../components/comboBox';
import Form from '../components/formulaire';
import TabsCarte from '../components/tabs';
import axios from 'axios';


const initialFormData = Object.freeze({
    name: "",
    price: "",
    desc: "",
  });

async function makeGetRequest(url) {
  let res = await axios.get(url);
  let data = res.data;
  return data;
}

function Proprio() {
  
  const [formData, updateFormData] = useState(initialFormData);

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
    <div><br/>
        <h1 style = {{marginLeft:'5%'}}>Menu du jour</h1>
        <ComboBox listElements={[pizzas,boissons,desserts]}/><br/>
        <h1 style = {{marginLeft:'5%'}}>Créer un nouveau produit</h1>
        <Form pizzas={pizzas} addPizzas={addPizzas} boissons={boissons} addBoissons={addBoissons} desserts={desserts} addDesserts={addDesserts} formDataPrevious={formData} updateFormData={updateFormData}/>
        <h1 style = {{marginLeft:'5%'}}>Carte du restaurant</h1>
        {pizzas.length>0 || boissons.length>0 || desserts.length>0 ? <TabsCarte listElements={[pizzas,boissons,desserts]} pizzas={pizzas} addPizzas={addPizzas} boissons={boissons} addBoissons={addBoissons} desserts={desserts} addDesserts={addDesserts}/> : null}

    </div>
  );
}
  
export default Proprio;



