const EventEmitter = require('events')
const http = require('http')

const customEmitter = new EventEmitter()

// Listen for events
// customEmitter.on('response',() => {
//   console.log(`Data received`)
// })


// customEmitter.emit('response')

// Create server with emitter
const server = http.createServer((res, req) => {
  console.log('server created')
})

server.on('request', (req, res) => {
  console.log('Server is on')
})

server.listen(9000)