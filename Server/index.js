const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
// const cors = require('cors');

// app.use(express.json());

// app.use(cors());

// app.get('/', (req, res) => {
//   res.send('<h1>hello</h1>');
// });

// let interval;

// const getApiAndEmit = (socket) => {
//   const response = new Date();
//   socket.emit('FromAPI', response);
// };

// io.on('connection', (socket) => {
//   console.log('connected');
//   if (interval) {
//     clearInterval(interval);
//   } else {
//     interval = setInterval(() => getApiAndEmit(socket), 1000);
//     socket.on('disconnect', () => {
//       console.log('client disconnected');
//       clearInterval(interval);
//     });
//   }
// });

io.on('connection', (socket) => {
  socket.on('message', ({ message, name }) => {
    io.emit('message', { message, name });
  });
});

http.listen(3001, () => {
  console.log('listening');
});
