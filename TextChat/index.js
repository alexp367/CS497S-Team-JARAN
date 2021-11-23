// Websocket
//import WebSocket, { WebSocketServer } from 'ws';

const express = require('express')
http = require('http');
const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 5000
const io = require('socket.io')(server)
const path = require('path')

//const webSocket = new WebSocket(url, protocols);

app.use(express.static(path.join(__dirname + '/public')))
//app.use(express.static('public'))
app.use(express.static(path.join(__dirname, '/')))


io.on('connection', socket => {
    //console.log('Some client connected')

    socket.on('chat', message => {
        //console.log('From client: ', message)
        io.emit('chat', message)
      })
})


app.get('/', (req, res) => {
    //res.status(200).send('Working')
});

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });