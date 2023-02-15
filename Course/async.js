const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.end('Home page')
  } 
  if(req.url === '/about') {
    // BLOCKING CODE
    // for(let i = 0; i < 1000; i++) {
    //   console.log('I', i)
    //   for(let j = 0; j < 1000; j++){
    //     console.log('J', j )
    //   }
    // }   
    res.end('About Page')
  }
})

server.listen(5000, () => {
  console.log('Server listening on port 5000')
})