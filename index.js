const express = require('express');
const app = express();
const cors = require('cors');
const port = process.removeListener.PORT || 5000;

const chefs = require('./data/chefs.json');

app.use(cors());

app.get('/', (req, res) =>{
    res.send('Chef Website is Running');
})

app.get('/chefs', (req, res) =>{
    res.send(chefs);
})

app.listen(port, ()=>{
    console.log(`Chefs Website is Running on port: ${port}`);
})
