import React, { Component } from 'react';
import { animateScroll as scroll } from "react-scroll";
import './inputMessage.css';

export default class MessageInput extends Component {
  state = {
    value: '',
    error: false,
  }
  
  textareaHandler = ({ target }) => {
   this.setState({
    value: target.value,
   })
  }

  addMessageHandler = () => {
    const {id, currentUser, addMessage} = this.props;
    let message = {}
    let timeMessage = this.getTime();

    message.messageId = id;
    message.userName = currentUser;
    message.created_at = timeMessage;
    message.currentUser = true;
    message.edit = false;
    message.messageText = this.state.value;
    if (this.state.value === '') {
      this.setState({
        error: true,
      })
      return;
    }
    this.setState({
      error: false,
      value: '',
    })
    addMessage(message);
    scroll.scrollToBottom();
  }

  getTime = () => {
    const date = new Date();
    const year = date.getFullYear().toString();
    const month = date.getMonth() + 1;
    const day = date.getDate().toString().padStart(2, 0);
    const hour = date.getHours().toString().padStart(2, 0);
    const minutes = date.getMinutes().toString().padStart(2, 0);
    const seconds = date.getSeconds().toString().padStart(2, 0);

    return `${year}-${month.toString().padStart(2, 0)}-${day} ${hour}:${minutes}:${seconds}`;
  }

  render() {
    return (
      <div className="inputMessage">
        <input 
          type="text" 
          placeholder="Type something..." 
          value={this.state.value} 
          onChange={(event) => this.textareaHandler(event)}
          className={this.state.error ? 'error' : ''}
        /> 
        <button onClick={this.addMessageHandler}> Send </button>
      </div>
    )
  }
}
