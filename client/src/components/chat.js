import React from 'react'
import { connect } from 'react-redux'
import ChatInput from './chat-input'
import ChatMessages from './chat-messages'
import Login from './login'

// "child" component that is rendering the chatroom(<ChatInput /> && <ChatMessages />) and username login "parent" components
const Chat = (props) => {
  return (
    <div>
      {props.username ? <div><ChatInput /><ChatMessages /></div> : <Login />}
    </div>
  )
}
// function that maps the application's state to props(properties)
function mapStateToProps(appState) {
  return {
    username: appState.username
  }
}
// connect() is a higher order function that adds mapStateToProps() to the <Chat /> component
export default connect(mapStateToProps)(Chat)
