import React from 'react';
import './Header.css';

export default function Header(props) {
  const {countUsers, countMessages, lastMessageTime} = props;
  return (
    <header className="header">
      <div className="header-conteinerLeft">
        <h1 className="header-logo">My Chat</h1>
        <p className="header-info">
          {countUsers} users {countMessages} messages
        </p>
      </div>
      <div className="header-conteinerRight">
        <p className="header-lastTimeMessage">
          Last message: {lastMessageTime}
        </p>
      </div>
    </header>
  )
}
