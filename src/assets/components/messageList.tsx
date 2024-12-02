import React from 'react';
import './MessageList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

interface Message {
  sender: string;
  content: string;
  timestamp: string;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="message-list">
      <h3>Messages</h3>
      {messages.map((message, index) => (
        <div key={index} className="message-item">
          <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
          <div className="message-info">
            <h4>{message.sender}</h4>
            <p>{message.content}</p>
            <span>{message.timestamp}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
