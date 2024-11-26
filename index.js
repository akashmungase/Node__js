const calculator = require('./calculation');

console.log('addition', calculator.add(4, 5));
console.log('Multiplication', calculator.multiply(4, 5));
console.log('Subtraction', calculator.subtraction(40, 5));
console.log('divide', calculator.divide(40, 5));

// const http = require('http');

// http.createServer((req, res) => {
//     res.write('Hello World');
//     res.end();
// }).listen(8900)