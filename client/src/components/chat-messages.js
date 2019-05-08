import React from 'react'
import { connect } from 'react-redux'

const ChatMessages = (props) => {
  // take in the application's props(chat messages) and render them through the ChatMessages component
  return (
    <ul>
      {/* map through all the chat messages and assign a unique key to all messages then list the
      username sending the message next to the actual message being sent*/}
      {props.messages.map((message, i) => (
        <li key={'message' + i}>{message.username}: {message.text}</li>
      ))}
    </ul>
  )
}
// a function that maps the application's state to props
function mapStateToProps(appstate) {
  return {
    messages: appstate.messages
  }
}

export default connect(mapStateToProps)(ChatMessages)
