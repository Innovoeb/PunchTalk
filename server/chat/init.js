



// initialize socket.io
const initSocket = function(io) {
  // on server connection, take in a user(socket)...
  io.on("connection", socket => {
    // recieve new messages from a user(socket)...
    socket.on('new message', msg => {
      /* then emit to everyone that is listening/io server that there is a
      new message and send that new message back down to all the other users(sockets)*/
      io.emit('new message', msg)
    })







  })
}

module.exports = initSocket
