const express = require('express')
const app = express()
const server = require('http').createServer(app)
const port = process.env.PORT || 4001
app.use(express.json());
const axios = require('axios');
const path = require('path');

app.post('/events', async (req, res) => {
    const username = req.body['username'];
    const password = req.body['password'];  
    const { type, data } = req.body;

    if(type == 'returnToLogin'){
        res.redirect('/FrontEnd/valen/src/components/Login/Login');
    }

    if(type == 'Login'){
        res.redirect('/FrontEnd/valen/src/components/Profile/Profile');
    }

});

server.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});