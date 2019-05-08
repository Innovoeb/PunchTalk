// application's initial state
const initialState = {
  messages: [],
  username: '',
}

export default function (state = initialState, action) {
  switch(action.type) {
    case 'ADD_MESSAGE':
      // keep the current application's state(chat messages already sent) and add new messages
      return {...state,
              messages: [...state.messages, action.payload]
              }
    case 'SET_USERNAME':
      // keep the current application's state and add/set new username
      return {...state,
              username: action.payload}
    default:
      return state
  }
}
