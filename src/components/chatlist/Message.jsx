import React from 'react'

export default function Message(props) {
  const {
    avatar, 
    userName, 
    messageText, 
    created_at, 
    messageId,
    favorite,
    addFavorite,
  } = props;

  return (
    <section className="userMessage">
      <div className="userMessage-wrapper">
        <div className="userMessage-image">
          <img src={avatar} alt="user"/>
        </div>
        <div className="userMessage-info">
          <h1 className="userMessage-name">{userName}</h1>
          <p className="userMessage-text">{messageText}</p>
        </div>
        <span className="userMessage-date">{created_at}</span>
        <span 
          className={`userMessage-favorite ${favorite ? 'userMessage-favorite__like' : ''}`}
          onClick={() => addFavorite(messageId)}
        >
        </span>
      </div>
    </section>
  )

}
