// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.write('Hello, World!');
//     res.end();
// });
// server.listen(3000, () => console.log('Server running on port 3000'));

// const calculator = require('./calculation');

// console.log('addition', calculator.add(4, 5));
// console.log('Multiplication', calculator.multiply(4, 5));
// console.log('Subtraction', calculator.subtraction(40, 5));
// console.log('divide', calculator.divide(40, 5));


// create file and remove files
// const fs = require('fs');

// const input = process.argv;

// if (input[2] == 'add') {
//     fs.writeFileSync(input[3], input[4]);
// } else if (input[2] == 'remove') {
//     fs.unlinkSync(input[3]);
// } else {
//     console.log('Invalid Input');
// }

// create multiple file and remove files

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files');

// for (let i = 0; i < 5; i++) {
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`, 'text file');
// }

// fs.readdir(dirPath, (err, files) => {
//     files.forEach((item)=> {
//         console.log('file name is',item);
//     })
// })


// Express.js

// const express = require('express');
// const app = express();

// app.get('', (req, res) => {
//     res.send('This is Home Page');
// })

// app.get('/about', (req, res) => {
//     // res.send(
//     //     `<h1>About Page</h1>`
//     // );

//     res.send(
//         `<input type="text" placeholder="name" value="${req.query.name}"/>
//         <button> Click Me </button>`
//     );
// })

// app.listen(3000);


// const express = require('express');
// const path = require('path');

// const app = express();
// const publicPath = path.join(__dirname, 'public');

// // app.use(express.static(publicPath));

// app.get('', (req, res) => {
//     res.sendFile(`${publicPath}/index.html`)
// })

// app.get('/about', (req, res) => {
//     res.sendFile(`${publicPath}/about.html`)
// })

// app.get('/contact', (req, res) => {
//     res.sendFile(`${publicPath}/contact.html`)
// })

// app.set('view engine', 'ejs')

// app.get('/profile', (req, res) => {
//     const user = {
//         name: 'Akash',
//         email: 'akashmungase@test.com',
//         skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript']
//     }
//     res.render('profile', {user})
// })

// app.get('/login', (req, res) => {
//     res.render('login')
// })
// app.listen(8000);



/**
 *  Middleware
 **/

// 1. Application level middleware
// It is apply for all routes of application

// const express = require('express');
// const app = express();

// const reqFilter = (req, res, next) => {
//     if (!req.query.age) {
//         res.send('Please Provide age')
//     }
//     else if (req.query.age < 18) {
//         res.send('You can not access this page')
//     }
//     else {
//         next();
//     }
// }

// app.use(reqFilter)

// app.get('/', (req, res) => {
//     res.send('Welcome to Home Page')
// })

// app.get('/profile', (req, res) => {
//     res.send('Welcome to Home Page')
// })

// app.listen(8000);



// 2. Route level middleware
// It is apply for one or more routes or group of routes

// const express = require('express');
// const app = express();
// const reqFilter = require('./middleware');

// app.get('/', (req, res) => {
//     res.send('Welcome to Home Page')
// })

// app.get('/profile', reqFilter, (req, res) => {
//     res.send('Welcome to profile Page')
// })

// app.get('/login', reqFilter, (req, res) => {
//     res.send('Welcome to login Page')
// })

// // group route
// const route = express.Router();
// app.use(reqFilter);

// route.get('/user', (req, res) => {
//     res.send('Welcome to user Page')
// })

// route.get('/contact', (req, res) => {
//     res.send('Welcome to contact Page')
// })

// app.use('/', route);

// app.listen(8000)



/*
* MongoDB Connection
*/

// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const database = 'e-commerce';
// const client = new MongoClient(url);

// async function getData() {
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('product');
//     let response = await collection.find({}).toArray();
//     console.log('response', response);
// }

// getData();

// const dbConection = require('./mongodb');

// const main = async () => {
//    let data = await dbConection();
//    let result = await data.find().toArray();
//    console.log('result', result);

// }

// main();



/*
* Mongoose Connection
*/

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-commerce')

const productSchema = new mongoose.Schema({
   name: String,
   price: Number,
   category: String
})
const productModel = mongoose.model('products', productSchema)

const saveInDB = async () => {
   let data = new productModel({name: 'M 15', price: 19999, category: "mobile"});
   let result = await data.save();
   console.log('result', result);
}

// saveInDB();

const updateInDB = async () => {
   let data = await productModel.updateOne(
      {name: "M 15"}, {$set: {price: 18555}}
   );
   console.log('data', data);
}

// updateInDB();

const deleteInDB = async () => {
   let data = await productModel.deleteOne({name: "M 15"});
   console.log('data', data);
}

// deleteInDB();

const findInDB = async () => {
   let data = await productModel.find({name: "M1"});
   console.log('data', data);
}

findInDB();