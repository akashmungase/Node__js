const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'e-commerce';
const client = new MongoClient(url);

async function dbConection() {
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('product');
}

module.exports = dbConection;