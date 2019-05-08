import io from 'socket.io-client'
import store from '../store'

// server to run io
const socket = io.connect('http://10.68.0.123:3001')
console.log(socket)
// function that sends a user's(socket) chat message once submitted
export function send(text) {
  // variable holding the username of the user(socket) that sent the message
  const username = store.getState().username
  // emit() is dispatching event(username, text) to the server
  socket.emit('new message', {
    text: text,
    username: username,
  })
}
// function that adds a user sent message to the io server
socket.on('new message', message => {

  store.dispatch({
    type: 'ADD_MESSAGE',
    payload: message,
  })
})
// function that dispatches a newly created username to the application store
export function createUsername(username) {
  store.dispatch({
  type: 'SET_USERNAME',
  payload: username
  })
}
