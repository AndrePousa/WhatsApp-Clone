import React from 'react';
import './ChatListItem.css';

const ChatListItem = ({onClick, active, data}) => {
  return (
    <div
      className={`chatListItem ${active? 'active': ''}`}
      onClick={onClick}

    >
      <img className="chatListItem-avatar" src={data.image} alt=""/>
      <div className="chatListItem-lines">
        <div className="chatListItem-line">
          <div className="chatListItem-name">{data.title}</div>
          <div className="chatListItem-date">20:40</div>
        </div>
        <div className="chatListItem-line">
          <div className="chatListItem-lastMsg">
            <p>Olá tudo bém ? como estão as coisas ? E a musculação, voltou a treinar ? você está se tornando um ótimo programador.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatListItem;