const express = require('express');
const app = express();
// const cors = require('cors')
// app.use(cors());

const  { data } = require('./api/dealer.js');
const { carData } = require('./api/cars.js');
const { rtoData } = require('./api/rto.js');

app.get("/api/dealer", (req, res)=>{
    res.send(data)
    // console.log(data);
    
})

app.get("/api/cars", (req, res)=>{
    res.send(carData);
})

app.get("/api/rto", (req, res)=>{
    res.send(rtoData);
})
app.listen(5000);