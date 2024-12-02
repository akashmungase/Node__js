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


const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

// app.use(express.static(publicPath));

// app.get('', (req, res) => {
//     res.sendFile(`${publicPath}/index.html`)
// })

// app.get('/about', (req, res) => {
//     res.sendFile(`${publicPath}/about.html`)
// })

// app.get('/contact', (req, res) => {
//     res.sendFile(`${publicPath}/contact.html`)
// })

// app.get('*', (req, res) => {
//     res.sendFile(`${publicPath}/404.html`)
// })

app.set('view engine', 'ejs')

app.get('/profile', (req, res) => {
    const user = {
        name: 'Akash',
        email: 'akashmungase@test.com',
        skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript']
    }
    res.render('profile', {user})
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.listen(8000);