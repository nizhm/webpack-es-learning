const fs = require('fs')

const folderName = 'new'
fs.mkdir(`./${folderName}`,returnVal => {
  if(returnVal) {
    console.error(returnVal)
  }else {
    console.log(`A new folder "${folderName}" has been generated successfully!`)
  }
})