//documentation: https://dev.to/miku86/nodejs-how-to-create-a-simple-server-using-express-1n9d
//documentation: https://codehandbook.org/how-to-make-rest-api-calls-in-express-web-app/

const express = require('express');
const request = require("request");

const app = express();
const PORT = 3000;

function apiHelper (url) {
    return new Promise((resolve, reject) => {
      request(url, { json: true }, (err, res, body) => {
        if (err) reject(err);
        resolve(body);
      });
    });
  };

//Display entire JSON Object
app.get('/', (req, res) => {
    apiHelper('http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees')
    .then(response => {
        res.json(response);
    })
    .catch(error => {
        res.send(error)
    })
})

//Display Users
app.get('/users', (req, res) => {
    apiHelper('http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees')
    .then(response => {
        res.json(response.map(data => data.name))
    })
    .catch(error => {
        res.send(error)
    })
})

//Display IDs
app.get('/id', (req, res) => {
    apiHelper('http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees')
    .then(response => {
        res.json(response.map(data => data.id))
    })
    .catch(error => {
        res.send(error)
    })
})

//Display CreatedAt
app.get('/created', (req, res) => {
    apiHelper('http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees')
    .then(response => {
        res.json(response.map(data => data.createdAt))
    })
    .catch(error => {
        res.send(error)
    })
})


app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});