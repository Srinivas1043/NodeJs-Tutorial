const path = require('path');

//Base file name

console.log(__filename)

console.log(path.extname(__filename))


console.log(path.parse(__filename).base)


console.log(path.join(__dirname, 'test','hello.html'))