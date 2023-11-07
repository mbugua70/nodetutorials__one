//  os module
// this one is a built in module

const os = require('os')

// to use the above module

const user = os.userInfo()

console.log(user)

// system uptime example with os module

console.log(`The system uptime is ${os.uptime()} seconds`)

// another example

const myOs = {
    type: os.type(),
    totalmem: os.totalmem(),
    releaseData: os.release(),
    freemem: os.freemem()
}

console.log(myOs)
