



// initialize socket.io
const initSocket = function(io) {
  // on server connection, take in a user(socket)...
  io.on("connection", socket => {
    // recieve new messages from user(socket)...
    socket.on('new message', text => {
      // then emit to everyone that is listening/io server that there is a new message
      io.emit('new message', text)
    })







  })
}

module.exports = initSocket
