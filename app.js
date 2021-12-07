const fs = require("fs")

fs.mkdir("./node-core-modules", function(err) {
  if (err) {
    console.log("ERROR",err)
  } else {
    console.log("New directory successfully created.")
  }
})