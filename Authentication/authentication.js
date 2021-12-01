const express = require('express')
const app = express()
const server = require('http').createServer(app)
const port = process.env.PORT || 3001
app.use(express.json());
const axios = require('axios');
const path = require('path');

app.post('/events', async (req, res) => {
    const username = req.body['username'];
    const password = req.body['password'];  
    const { event, data } = req.body;

    if(event == 'returnToLogin'){
        res.redirect('../FrontEnd/src/components/Login/Login'); 
    }

    if(event == 'Login'){
        res.redirect('../FrontEnd/src/components/profile/Profile'); 
    }

});

server.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});