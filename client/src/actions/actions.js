import io from 'socket.io-client'
import store from '../store'

// server to run io
const socket = io.connect('http://10.68.0.123:3001')
console.log(socket)
// function that sends a user's(socket) chat message once submitted
export function send(text) {
  console.log(text)
  // emit() is dispatching event to the server
  socket.emit('new message', text)
}
// function for when a user sends a new message
socket.on('new message', text => {
  store.dispatch({
    type: 'ADD_MESSAGE',
    payload: text
  })
})
