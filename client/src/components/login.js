import React, { useState } from 'react'
import { createUsername } from '../actions/actions'

// React useState
export default (props) => {
  const [username, setUsername] = useState('')
  // send newly created usernames and...
  function sendUser(e) {
    e.preventDefault()
    createUsername(username)
  }

  return (
    <form onSubmit={sendUser}>
      <input
      type="text"
      value={username}
      placeholder="Enter a username"
      onChange={e => setUsername(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
