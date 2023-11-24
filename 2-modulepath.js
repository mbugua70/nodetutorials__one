const path = require('path')

// logging out the /  example

console.log(path.sep)

const base = path.join('/nodeone/1-modulename.js')

console.log(base )

// to find the specific file
// example

const fileOne = path.basename(base)
console.log(fileOne)

// resolve
// used to provide an absolute path
const absolutePath = path.resolve(__dirname, "/nodeone/1-modulename.js")

console.log(absolutePath)