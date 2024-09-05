const fs = require('fs')
const readLine = require('readline')

// readLine Interface
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
})

const fileOperations = {
  writeToFile: function (fileName, fileContent) {
    fs.writeFile(fileName, fileContent, function (err) {
      if (err)
        console.error("Error : " + err)
      else
        console.log("Done")
    })
  },

  appendToFile: function (fileName, fileContent) {
    fs.appendFile(fileName, fileContent, function (err) {
      if (err)
        console.error("Error : " + err)
      else
        console.log("Done")
    })
  },

  renameTheFile: function (oldPath, newPath) {
    fs.rename(oldPath, newPath, function (err) {
      if (err)
        console.error("Error : " + err)
      else
        console.log("Done")
    })
  },

  copyTheFile: function (src, dest) {
    fs.copyFile(src, dest, function (err) {
      if (err)
        console.error("Error : " + err)
      else
        console.log("Done")
    })
  },

  deleteTheFile: function (fileName) {
    fs.unlink(fileName, function (err) {
      if (err)
        console.error("Error : " + err)
      else
        console.log("Done")
    })
  },

  readTheFile: function (fileName) {
    fs.readFile(fileName, 'utf8', function (err, data) {
      if (err)
        console.log("Error : " + err)
      else
        console.log("File contains : " + data)
    })
  },

  createTheFolder: function (folderName) {
    fs.mkdir(folderName, { recursive: true }, function (err) {
      if (err)
        console.error("Error : " + err)
      else
        console.log("Done")
    })
  },

  deleteTheFolder: function (folderName) {
    fs.rm(folderName, { recursive: true }, function (err) {
      if (err)
        console.error("Error : " + err)
      else
        console.log("Done")
    })
  }
}

console.log("+--File Operations Using Node FileSystem--+")
console.log("1. Create File")
console.log("2. Write File")
console.log("3. Append File")
console.log("4. Copy File")
console.log("5. Rename File")
console.log("6. Delete File")
console.log("7. Create Folder")
console.log("8. Delete Folder")
console.log("9. Exit")

rl.question("Enter your choice : ", (ch) => {
  switch (parseInt(ch)) {
    case 1:
      rl.question("Enter File Name : ", (fn) => {
        rl.question("Enter File extension [txt, csv, etc] : ", (fx) => {
          let fnx = fn + "." + fx
          fileOperations.writeToFile(fnx, '')
        })
      })
      break
    case 2:
      rl.question("Enter File Name : ", (fn) => {
        rl.question("Enter File extension [txt, csv, etc] : ", (fx) => {
          rl.question("Enter File Content : ", (fc) => {
            let fnx = fn + "." + fx
            fileOperations.writeToFile(fnx, fc)
          })
        })
      })
      break
    case 3:
      rl.question("Enter File Name : ", (fn) => {
        rl.question("Enter File extension [txt, csv, etc] : ", (fx) => {
          rl.question("Enter File Content : ", (fc) => {
            let fnx = fn + "." + fx
            fileOperations.appendToFile(fnx, fc)
          })
        })
      })
      break
    case 4:
      rl.question("Enter old path : ", (op) => {
        rl.question("Enter new path : ", (np) => {
          fileOperations.copyTheFile(op, np)
        })
      })
      break
    case 5:
      rl.question("Enter old name : ", (onm) => {
        rl.question("Enter new name : ", (nnm) => {
          fileOperations.renameTheFile(onm, nnm)
        })
      })
      break
    case 6:
      rl.question("Enter file name : ", (df) => {
        fileOperations.deleteTheFile(df)
      })
      break
    case 7:
      rl.question("Enter folder name : ", (fn) => {
        fileOperations.createTheFolder(fn)
      })
      break
    case 8:
      rl.question("Enter folder name : ", (fn) => {
        fileOperations.deleteTheFolder(fn);
      })
      break
    case 9:
      console.log("Exiting...")
      break
    default:
      console.warn("Invalid choice!")
  }
})