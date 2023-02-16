const { readFile, writeFile } = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

// const getText = (path) => {
//   return new Promise((res, rej) => {
//     readFile(path, 'utf8', (err, data) => {
//       if(err) {
//         rej(err)
//       } else {
//         res(data)
//       }
//     })
//   })
// }

// getText('./info/info.txt')
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

const start = async() => {
  try {
    const first = await readFilePromise('./info/info.txt', 'utf8')
    const second = await readFilePromise('./info/info2.txt')
    await writeFilePromise('./info/crazybro.txt', `THIS IS WILD :${first}`)
    console.log()
  } catch(error) {
    console.log(error)
  }
}

start()
