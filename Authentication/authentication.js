const express = require('express')
const app = express()
const server = require('http').createServer(app)
const port = process.env.PORT || 3000

let creds = {};



server.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});