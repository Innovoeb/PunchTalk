import React, { useState } from 'react'
import { send } from '../actions/actions'

export default (props) => {
  const [text, setText] = useState('')

  function sendMessage() {
    send(text)
  }

  return (
    <div>
      <input
      placeholder="message"
      onChange={e => setText(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}
