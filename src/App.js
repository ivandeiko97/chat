import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducer';
import './App.css';
import ChatAppHandler from './components/chatApp/ChatAppHandler';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ChatAppHandler />
      </Provider>
    </div>
  );
}

export default App;
