const fs = require("fs")
const content = "hello world this is my first file!"
const currPath = "./node-core-modules"
const newPath = "./new-dir-name"

//1.1
const makeDirectory = fs.mkdir("./node-core-modules", function(err) {
  if (err) {
    console.log("ERROR IN makeDirectory", err)
  } else {
    console.log("New directory successfully created.")
  }
})

//1.2 + 1.3
const createFile = fs.writeFile('./file.txt', content, {flag: 'wx'}, function(err){
    if (err){
        console.log("ERROR IN createFile", err)
    } else {
        console.log("New file successfully created.")
    }
})

//1.4
const readFile = fs.readFile('./file.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
  })

  //1.5
  const renameDir = fs.rename(currPath, newPath, function(err) {
    if (err) {
      console.log(err)
    } else {
      console.log("Successfully renamed the directory.")
    }
  })