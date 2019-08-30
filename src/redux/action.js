export const LOAD_DATA = 'LOAD_DATA';
export const ADD_FAFORITE = 'ADD_FAROVITE';
export const EDIT_MESSAGE = 'EDIT_MESSAGE';
export const CHANGE_MODE = 'CHANGE_MODE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';

export function fetchDataAction() {
  return (dispatch) => {
    fetch('https://api.dev.buki.com.ua/frontend_test')
      .then(data => data.json())
      .then(data => {
        const messages = data.map(item => {
          if (item.user === 'Taylor') {
            return {
              messageId: item.id,
              userName: item.user,
              created_at: item.created_at,
              messageText: item.message,
              currentUser: true,
              edit: false,
            }
          }
          return {
            messageId: item.id,
            userName: item.user,
            created_at: item.created_at,
            messageText: item.message,
            currentUser: false,
            favorite: false,
          }
        })
        const dataUser = data.map(user => {
          return {
            name: user.user,
            avatar: user.avatar,
          }
        })
        
        const flags = {}
        const users = dataUser.filter(user => {
          if (flags[user.name]) {
            return false;
          }
          flags[user.name] = true;
          return true;
        });
        
        dispatch(laodDataAction(messages, users));
      });
  };
};

export function addFavoriteAction(id) {
  return {
    type: ADD_FAFORITE,
    id,
  };
};

export function editMessageAction(id, value) {
  console.log(value)
  return {
    type: EDIT_MESSAGE,
    id,
    value,
  };
};

export function changeEditModeAction(id) {
  return {
    type: CHANGE_MODE,
    id,
  };
};

export function deleteMessageAction(id) {
  return {
    type: DELETE_MESSAGE,
    id,
  }
}

export function addMessageAction(message) {
  return {
    type: ADD_MESSAGE,
    message,
  };
};

function laodDataAction(messages, users) {
  return {
    type: LOAD_DATA,
    messages,
    users,
  };
};
