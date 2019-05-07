// application's initial state
const initialState = {
  messages: []
}

export default function (state = initialState, action) {
  switch(action.type) {
    case 'ADD_MESSAGE':
      // keep the current application's state(chat messages already sent) and add new messages
      return {...state,
              messages: [...state.messages, action.payload]
              }
    default:
      return state
  }
}
