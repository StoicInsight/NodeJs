const { createReadStream } = require('fs')

const stream = createReadStream('./info/biginfo.txt')

stream.on('data', (result) => {
  console.log(result)
})