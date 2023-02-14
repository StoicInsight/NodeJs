const os = require('os')

// Info about the user
const userInfo = os.userInfo()
console.log(userInfo)

// Return how long system has been running
console.log(`The system has been running for ${os.uptime().toExponential()}`)
// About the operating system
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}


