import React, { useState } from 'react'
import { send } from '../actions/actions'

export default (props) => {
  const [text, setText] = useState('')

  function sendMessage(e) {
    e.preventDefault()
    send(text)
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <input
        placeholder="message"
        onChange={e => setText(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
