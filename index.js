const express = require('express');
const app = express();
const cors = require('cors');
const port = process.removeListener.PORT || 5000;

// Require Data From Json File
const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');

app.use(cors());

app.get('/', (req, res) =>{
    res.send('Chef Website is Running');
})

app.get('/chefs', (req, res) =>{
    res.send(chefs);
})

app.get('/recipes', (req, res) =>{
    res.send(recipes);
})



app.listen(port, ()=>{
    console.log(`Chefs Website is Running on port: ${port}`);
})
