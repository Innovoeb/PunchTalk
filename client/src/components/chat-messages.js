import React from 'react'
import { connect } from 'react-redux'

const ChatMessages = (props) => {
  // take in the application's props(chat messages) and render in through the ChatMessages component
  return (
    <ul>
      {props.messages.map((message, i) => (
        <li key={'message' + i}>{message}</li>
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
