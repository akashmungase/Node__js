// // Importing the http module
// const http = require('http');

// // Creating a server
// const server = http.createServer((req, res) => {
//     // Setting the content type to HTML
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     });

//     // Sending the HTML response
//     res.end('<h1>Hello GFG</h1>');
// });

// // Listening on port 3000
// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}/`);
// });

const http = require('http');

const data = require('./data');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(data));
    res.end();
})

const PORT = 3000;
server.listen(PORT, () => {

});