const EventEmitter = require('events')
const http = require('http')

const customEmitter = new EventEmitter()

// Listen for events
// customEmitter.on('response',() => {
//   console.log(`Data received`)
// })


// customEmitter.emit('response')

// Create server with emitter
const server = http.createServer()

server.on('request', (req, res) => {
  res.end('From emiter')
  console.log('Server is on')
})

server.listen(9000)