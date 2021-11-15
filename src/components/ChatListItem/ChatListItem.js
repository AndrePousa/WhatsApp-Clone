import React from 'react';
import './ChatListItem.css';

const ChatListItem = () => {
  return (
    <div className="chatListItem">
      <img className="chatListItem-avatar" src="https://previews.123rf.com/images/kritchanut/kritchanut1401/kritchanut140100054/25251050-businessman-avatar-profile-picture.jpg" alt=""/>
      <div className="chatListItem-lines">
        <div className="chatListItem-line">
          <div className="chatListItem-name">André Roberto</div>
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