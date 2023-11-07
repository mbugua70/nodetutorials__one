// learning about file system module

const {readFileSync, writeFileSync} = require('fs')
console.log("start")
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

// writeFileSync () - takes to arguement first the path then the second is the value we want to pass
// if the file is not there node will create it for you
// writeFileSync takes another arguement which is an object flag a


writeFileSync('./content/writefile.txt', `Hello there is this the result for: ${first}, ${second}`, {flag: 'a'})

console.log("starting the code")
console.log("ending the code")

// in the example above js has to finish with the first code before it goes to the next question
