import React, { Component } from 'react';
import ChatListHandler from '../chatlist/ChatListHandler';
import HeaderHandler from '../header/HeaderHandler';
import MessageInputHandler from '../messageInput/MessageInputHandler';
import Footer from '../footer/Footer';

export default class ChatApp extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    if (this.props.loadData) {
      return (
        <div ref={this.myRef}>
          <HeaderHandler />
          <ChatListHandler />
          <MessageInputHandler />
          <Footer />
        </div>
      )
    };
    return (
      <div className="preloader">
        <div className="preloader-1"></div>
        <div className="preloader-2"></div>
        <div className="preloader-3"></div>
      </div>
    )
  }
}
