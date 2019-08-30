import { LOAD_DATA, ADD_FAFORITE, EDIT_MESSAGE, CHANGE_MODE, DELETE_MESSAGE, ADD_MESSAGE } from "./action";
import initialState from './state';

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_DATA:
      return {
        ...state,
        messages: action.messages,
        users: action.users,
        loadData: true,
      }
    case ADD_FAFORITE: 
      return {
        ...state,
        messages: state.messages.map(message => {
          if (message.messageId === action.id) {
            return {
              ...message,
              favorite: !message.favorite,
            }
          };
          return message;
        })
      };
    case EDIT_MESSAGE:
    return {
      ...state,
      messages: state.messages.map(message => {
        if (message.messageId === action.id) {
          return {
            ...message,
            messageText: action.value,
          }
        };
        return message;
      })
    };
    case CHANGE_MODE: 
    return {
      ...state,
      messages: state.messages.map(message => {
        if (message.messageId === action.id) {
          return {
            ...message,
            edit: !message.edit,
          }
        };
        return message;
      })
    };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(message => message.messageId !== action.id)
      }
    case ADD_MESSAGE:
        let copyMessages = [...state.messages]
        copyMessages.push(action.message)
      return {
        ...state,
        messages: copyMessages,
      }
    default:
      return state;
  }
}