const number = 12
let test = " "

if( number < 20) {
  test = "smaller"
}else{
   test = "larger"
}

console.log(`I am working on a ${test} app`)


// lessson two modules
//  we will use require to access our modules
//  we will pass the path to the our module require(pathname)

const sayHello = require('./1-moduleutilis.js')
// const names = require('./1-modulename.js')
// destructuring the names above

const {john, otieno} = require("./1-modulename")
// sayHello(names.john)
// sayHello(names.otieno)

// import from alternative file 1

const data = require('./1-modulealternative.js')
console.log(data)


sayHello(john)
sayHello(otieno)