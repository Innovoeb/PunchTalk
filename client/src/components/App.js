import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import ChatInput from './chat-input'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ChatInput />
      </Provider>
    )
  }
}

export default App
