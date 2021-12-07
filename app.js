const fs = require("fs")
const content = "hello world this is my first file!"

//1.1
const makeDirectory = fs.mkdir("./node-core-modules", function(err) {
  if (err) {
    console.log("ERROR IN makeDirectory ",err)
  } else {
    console.log("New directory successfully created.")
  }
})

//1.2
const createFile = fs.writeFile('./file.txt', content, {flag: 'wx'}, function(err){
    if (err){
        console.log("ERROR IN createFile", err)
    } else {
        console.log("New file successfully created. ")
    }
})



// fs.readFile("./node-core-modules/message.txt", "utf8", (err, data) => {
//     if (err) {
//       console.log(err.message);
//     } else {
//       console.log("File contents:", data);
//     }
//     renameMe();
//   });
  
//   const renameMe = () => {
//     fs.rename("./node-core-modules", "./renamed-node-core-modules", (err) => {
//       if (err) {
//         console.log(err, err.message);
//       } else {
//         console.log("Directory successfully renamed!");
//       }
//     });
//   };