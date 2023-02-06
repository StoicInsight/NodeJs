const fs = require('fs')
const http = require('http')
const url = require('url')


// // Read file
// // const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')

// // const textOut = `Added string using node js v8 ${textIn}`
// // fs.writeFileSync('./txt/output.txt', textOut)
// // console.log('File written')

// // // Async 
// // fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
// //   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
// //     console.log(data2)
// //     fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
// //       console.log(data3)

// //       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
// //         console.log('Files written')
// //       })
// //     })
// //   })
// })

// Server
// Read API Data from file
const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8')
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8')
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8')
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
// Transform data to json
const dataObj = JSON.parse(data)

// Create Server 
const server = http.createServer((req, res) => {
  const pathName = req.url

  // OVERVIEW PAGE
  if(pathName === "/" || pathName === '/overview') {
    res.end(tempOverview)
    
    // PROCUCT PAGE
  } else if(pathName === '/product') {
    res.end(tempProduct)

    // API PAGE
  } else if(pathName === '/api'){
    
    // Let browser know youre sending back json data
    res.writeHead(200, { 'Content-type': 'application/json' })
    res.end(data)

    // NOT FOUND
  } else {
    res.writeHead(404, {
      'Content-type': 'text-html'
    })
    res.end("<h1>Page not found</h1>")
  }

})

// Start Server
server.listen(8000, '127.0.0.1', () => {
  console.log('Server Started on local host')
})