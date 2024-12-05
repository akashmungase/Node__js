const express = require('express');
require('./config');

const product = require('./product');

const app = express();
app.use(express.json());

app.post("/create", async (req, res) => {
    let data = new product(req.body);
    let result = await data.save();
    console.log('result', result);
    res.send(result);
})

app.get('/list', async (req, res) => {
    let data = await product.find();
    res.send(data);
})

app.delete('/delete/:_id', async (req, res) => {
    const productId = req.params._id;
    const result = await product.deleteOne({ _id: productId });
    res.send({ message: 'Product deleted successfully', result });
})

app.put('/update/:_id', async (req, res) => {
    const result = await product.updateOne(
        req.params, { $set: req.body }
    );
    res.send({ message: 'Product Updated successfully', result });
})

app.put('/edit', async (req, res) => {
    const result = await product.updateOne(
        { name: req.body.name }, { $set: req.body }
    );
    res.send({ message: 'Product Updated successfully', result });
})

app.get('/search/:key', async (req, res) => {
    console.log(req.params.key);

    let data = await product.find(
        {
            "$or": [
                { "name": { $regex: req.params.key } },
                { "category": { $regex: req.params.key } }
            ]
        }
    );
    res.send(data);
})

app.listen(8000);