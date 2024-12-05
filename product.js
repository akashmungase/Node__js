const { name } = require('ejs');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String
});

module.exports = mongoose.model('product', productSchema);