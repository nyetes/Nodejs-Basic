const path = require('path');

//Base fule name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// Fiel extension
console.log(path.extname(__filename));

// create path onject 
console.log(path.parse(__filename).base);

// Concatentr paths

console.log(path.join(__dirname, 'test', 'hello.html'));