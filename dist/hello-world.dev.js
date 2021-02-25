const fs = require('fs')

fs.readFile(process.argv[2], function newLines (error, text) {
  if (error) {
    return console.log(error)
  }
  const Count = text.toString().split('\n').length - 1
  console.log(Count)
})

