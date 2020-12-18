import React, {useState} from 'react';
import Message from './message';
import RadioButtonsGroup from './radio.js'
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from '@material-ui/core/styles';


async function makePostRequest(url, newName, newPrice, newDesc) {
    let res = await axios.post(url, {
      name: newName,
      price: newPrice,
      desc: newDesc
    });
    return res;
}

const useStyles = makeStyles((theme) => ({
    texte: {
        marginLeft:'30px',
    },
    input: {
        color: "white",
    },
    cssLabel: {
        color : 'white'
    },
    
    cssOutlinedInput: {
        '& $notchedOutline': {
        borderColor: `${theme.palette.primary.main} !important`,
        color: "white"
        }
    },
    
    cssFocused: {},
    
    notchedOutline: {
        borderWidth: '1px',
        borderColor: 'white !important',
        color: "white"
    },
  }));
  
function Form({pizzas, addPizzas, boissons, addBoissons, desserts, addDesserts, formDataPrevious, updateFormData}) {
    const classes = useStyles();

    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('');
    const [message, setMessage] = useState('');
    const [value, setValue] = useState("pizza");

    const handleChange = (e) => {
        console.log(e.target.name)
        updateFormData({
          ...formDataPrevious,
    
          // Trimming any whitespace
          [e.target.name]: e.target.value.trim()
        });
    };

    const handleFile = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
        setMessage("ok");
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (value=='pizza') {
            addPizzas([
                ...pizzas,
                {name:formDataPrevious.name, price: formDataPrevious.price, desc:formDataPrevious.desc }
            ])
        } else if (value=='boisson'){
            addBoissons([
                ...boissons,
                {name:formDataPrevious.name, price: formDataPrevious.price, desc:formDataPrevious.desc }
            ])
        } else {
            addDesserts([
                ...desserts,
                {name:formDataPrevious.name, price: formDataPrevious.price, desc:formDataPrevious.desc }
            ])
        }

        

        // ... submit to API or something
        makePostRequest('http://localhost:3000/api/v1/create'+value, formDataPrevious.name, formDataPrevious.price, formDataPrevious.desc)
        .then(( data ) => console.log(data))
        .catch((err) => console.log(err))
    
        // File
        const formData = new FormData();
        formData.append('file', file, formDataPrevious.name+'.jpg');
        axios.post('http://localhost:3000/upload', formData);
        setMessage('')
    };

    return (

    <div>
        <div className={classes.root} style={{marginLeft:'7%', marginRight:'7%', border:'solid 2px', paddingTop:'20px',textAlign:'center'}}>
        <div style={{marginTop:'20px'}}><RadioButtonsGroup value = {value} setValue = {setValue}/></div><br/><br/>
        <form>
            <TextField 
                id="name" 
                name="name"
                label="Nom" 
                className = {classes.texte} 
                style = {{width:'180px'}} 
                InputLabelProps={{
                    classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                        root: classes.input,
                        focused: classes.cssOutlinedInput,
                        notchedOutline: classes.notchedOutline,
                      },
                  }}
                variant="outlined" 
                color='primary'
                onChange={handleChange}
            />

            <TextField 
                id="price"
                name="price" 
                label="Prix" 
                className = {classes.texte} 
                style = {{width:'70px'}} 
                variant="outlined" 
                color='primary'
                InputLabelProps={{
                    classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                        root: classes.input,
                        focused: classes.cssOutlinedInput,
                        notchedOutline: classes.notchedOutline,
                      },
                  }}
                onChange={handleChange} 
                type="number"
            />

            <TextField
                id="desc"
                name="desc"
                label="Description - Ingrédients"
                className = {classes.texte}
                style = {{width:'270px'}}
                InputLabelProps={{ shrink: true }}
                multiline
                rows={1}
                variant="outlined"
                color='primary'
                onChange={handleChange}
                InputLabelProps={{
                    classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                        root: classes.input,
                        focused: classes.cssOutlinedInput,
                        notchedOutline: classes.notchedOutline,
                      },
                  }}
            />

            <Button variant="contained" component="label" color="primary" startIcon={<CloudUploadIcon/>} style={{marginLeft:'30px'}}>
                Ajouter une image (.jpg)
                <input type="file" hidden onChange = {handleFile} accept=".jpg"/>
            </Button>

            <div style={{textAlign:'center',marginTop:'40px'}}>

            <Button variant="contained" component="label" color="primary">
                Créer un nouveau produit
                <input hidden onClick={handleSubmit} style={{margin:'auto'}}/>
            </Button></div>
            {message ? <Message message={message} setMessage={setMessage}/> : null}
            <br/>
            
        </form>
        </div>
    </div>

    )
}

export default Form;