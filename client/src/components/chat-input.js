import React, { useState } from 'react'
import { send } from '../actions/actions'

// React useState
export default (props) => {
  const [text, setText] = useState('')
  // function that sends messages emitted by users(socket)
  function sendMessage(e) {
    e.preventDefault()
    send(text)
    setText('')
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <input
        placeholder="message"
        onChange={e => setText(e.target.value)}
        value={text}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
