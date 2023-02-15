const {readFile} = require('fs')

const getText = (path) => {
  return new Promise((res, rej) => {
    readFile(path, 'utf8', (err, data) => {
      if(err) {
        rej(err)
      } else {
        res(data)
      }
    })
  })
}

// getText('./info/info.txt')
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

const start = async() => {
  try {
    const first = await getText('./info/info.txt')
    const second = await getText('./info/info2.txt')
    console.log(first, second)
  } catch(error) {
    console.log(error)
  }
}

start()
