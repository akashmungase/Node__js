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

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');

// for (let i = 0; i < 5; i++) {
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`, 'text file');
// }

// fs.readdir(dirPath, (err, files) => {
//     files.forEach((item)=> {
//         console.log('file name is',item);
//     })
// })