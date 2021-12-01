// Websocket
//import WebSocket, { WebSocketServer } from 'ws';

const express = require('express')
const app = express()
const server = require('http').createServer(app)
const port = process.env.PORT || 5000
const io = require('socket.io')(server, {
  path: '/textchat:5000'
})
const path = require('path')



//const webSocket = new WebSocket(url, protocols);

app.use(express.static(path.join(__dirname + '/public')))
app.use(express.static(path.join(__dirname + '/node_modules/socket.io/client-dist')))

io.on('connection', socket => {
    //console.log('Some client connected')

    socket.on('chat', message => {
        //console.log('From client: ', message)
        io.emit('chat', message)
      })
})


// app.get('/', (req, res) => {
//     //res.sendFile(__dirname + '/public/index.html')
//     //res.status(200).send('Working')
// });

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });