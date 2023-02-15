const fs = require('fs')

console.log('Starting first ask 1')

fs.readFile('./info/info.txt', 'utf-8', (err, result) => {
  if(err) {
    console.log(err)
    return
  }

  console.log(result, '3')
  console.log('Completed first task 4')
})

console.log('Starting next task 2')