const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

// app.use(express.json);

app.get('/', async (req, res) => {
    let data = await dbConnect();
    let result = await data.find().toArray();
    res.send(result);
})

app.post('/', async (req, res) => {
    let data = await dbConnect();
    let result = await data.insertMany(req.body);
    res.send(result);
})

app.listen(8000);