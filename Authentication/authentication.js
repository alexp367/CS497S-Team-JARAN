const express = require('express')
const app = express()
const server = require('http').createServer(app)
const port = process.env.PORT || 3000
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({'extended' : true}));

var creds = {};

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '/public/login.html'));
});

app.post('/register', (req, res) => {
    const username = req.body['username'];
    const password = req.body['password'];  
    if(creds.hasOwnProperty(username)){
        res.status(401).sendFile(path.join(__dirname + "/public/register.html"));
    }
    else{
        creds[username] = password;
        res.status(201).sendFile(path.join(__dirname + "/public/login.html"));
        
    }
});

app.post('/login', (req, res) => {
    const username = req.body['username'];
    const password = req.body['password'];  
    if(creds[username] === password){
        res.status(200).sendFile(path.join(__dirname + "/public/home.html"));//Empty page to ensure login works
    }
    else{
        res.status(401).sendFile(path.join(__dirname + "/public/login.html"));
    }
});

app.get("/register", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + "/public/register.html"));
});

app.get("/login", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + "/public/login.html"));
});

server.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});