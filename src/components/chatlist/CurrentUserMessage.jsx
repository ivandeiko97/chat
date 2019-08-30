import React from 'react';
import EditMessage from './EditMessage';

export default function CurrentUserMessage(props) {
  const {
    avatar, 
    userName, 
    messageText, 
    created_at, 
    messageId,
    edit,
    changeMode,
    editMessage,
    deleteMessage,
  } = props;
  return (
    <section className="userMessage userMessage__curentUser">
      <div className={`userMessage-wrapper ${edit ? 'userMessage-wrapper__edit' : ''}`}>
        <div className="userMessage-image">
          <img src={avatar} alt="user"/>
        </div>
        <div className="userMessage-info">
          <h1 className="userMessage-name">{userName}</h1>
          {edit 
            ? 
              <EditMessage 
                value={messageText} 
                changeMode={changeMode} 
                editMessage={editMessage} 
                id={messageId}
              /> 
            :
              <p className="userMessage-text">{messageText}</p>
          }
        </div>
        <span className="userMessage-date">{created_at}</span>
        <span
          style={{display: edit ? 'none' : ''}}
          className="userMessage-edit" 
          onClick={() => changeMode(messageId)}
        >
        </span>
        <span
          onClick={() => deleteMessage(messageId)}
          className={`userMessage-delete ${edit ? 'userMessage-delete__position' : ''}`}
        >
          &times;
        </span>
      </div>
    </section>
  )
}
