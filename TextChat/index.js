
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const port = process.env.PORT || 3003
const io = require('socket.io')(server, {
  // transports: [ "websocket" ] // or [ "websocket", "polling" ] (the order matters)
  // transports:  [ "websocket", "polling" ]
  cors: {
    origin: "http://textchat:3003",
    methods: ["GET", "POST"],
    credentials: true
  }
})
const path = require('path')


app.use(express.static('public'));
app.use(express.static('node_modules'));

// app.use(express.static(path.join(__dirname + '/public')));
// app.use(express.static(path.join(__dirname, '/node_modules')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', '/index.html'));
// })

io.on('connection', socket => {
    console.log('Some client connected')
    
    socket.on('disconnect', socket =>{
      console.log('Someone disconnected')
      io.emit('chat', 'someone disconnected')
    })
    socket.on('chat', message => {
        console.log('From client: ', message)
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