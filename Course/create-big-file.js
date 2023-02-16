const { writeFileSync } = require('fs')

for(let i = 0; i < 10000; i++) {
  writeFileSync('./info/biginfo.txt', `Helloo from big files cuhh${i}\n`, { flag: 'a'})
}