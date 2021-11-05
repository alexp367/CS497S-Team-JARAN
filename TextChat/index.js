const express = require('express')
const app = express()
const server = require('http').createServer(app)
const port = process.env.PORT || 3000
const io = require('socket.io')(server)
const path = require('path')
// Websocket
import WebSocket, { WebSocketServer } from 'ws';

webSocket = new WebSocket(url, protocols);

app.use(express.static(path.join(__dirname + '/public')))

io.on('connection', socket => {
    //console.log('Some client connected')

    socket.on('chat', message => {
        //console.log('From client: ', message)
        io.emit('chat', message)
      })
})


app.get('/', (req, res) => {
    res.status(200).send('Working')
});

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });