import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import ChatInput from './chat-input'
import ChatMessages from './chat-messages'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ChatInput />
        <ChatMessages />
      </Provider>
    )
  }
}

export default App
