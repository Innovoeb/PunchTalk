import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Chat from './chat'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Chat />
      </Provider>
    )
  }
}

export default App
