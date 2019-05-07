import io from 'socket.io-client'

// server to run io
const socket = io.connect('http://localhost:3001')
console.log(socket)
// emit() is dispatching event to the server
export function send(text) {
  socket.emit('new message', text)
}
