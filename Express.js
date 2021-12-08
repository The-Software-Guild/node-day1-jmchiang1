//documentation: https://dev.to/miku86/nodejs-how-to-create-a-simple-server-using-express-1n9d

const express = require('express');
const api = require('./API')
const https = require('https');

const app = express();
const PORT = 3000;

// app.use(bodyParser.urlendcoded({ extended: false }));
// app.use(bodyParser.json());

app.get('/', (req, res) => {
    api.make_API_call('http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees')
    .then(response => {
        res.json(response);
        // res.json(response.map(data => data.name))
    })
    .catch(error => {
        res.send(error)
    })
})


app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});