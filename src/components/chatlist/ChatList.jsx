import React, { Component } from 'react'
import MessageHandler from './MessageHandler';
import CurrentMessageHandler from './CurrentMessageHandler';
import './chatlist.css';

export default class ChatList extends Component { 
  myRef = React.createRef()

  componentDidMount() {
    window.scrollTo(0, this.myRef.current.scrollHeight + 10)
  }

  render() {
    const {users, messages} = this.props;
    return (
      <div ref={this.myRef} className="chatList">
        {messages.map(message => {
          const {
            userName,
            created_at,
            messageText,
            currentUser,
            favorite,
            messageId,
            edit,
          } = message;        
          const avatar = users.find(user => user.name === message.userName).avatar;
          if (!currentUser) {
            return <MessageHandler
                      userName={userName} 
                      avatar={avatar}
                      created_at={created_at}
                      messageText={messageText}
                      favorite={favorite}
                      messageId={messageId}
                      key={messageId}
                      
                    />
          }
          return <CurrentMessageHandler
                    userName={userName} 
                    avatar={avatar}
                    created_at={created_at}
                    messageText={messageText}
                    messageId={messageId}
                    edit={edit}
                    key={messageId}
                  />
        })}
      </div>
    )
  }
}
