import React from 'react';
import './App.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const App = () => {
  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img className="header-avatar" src="https://previews.123rf.com/images/kritchanut/kritchanut1401/kritchanut140100054/25251050-businessman-avatar-profile-picture.jpg" alt=""/>
          <div className="header--buttons">
            <div className="header-btn">
              <DonutLargeIcon style={{color:'#919191'}}/>
              
            </div>
            <div className="header-btn">
              <ChatIcon style={{color:'#919191'}}/>
              
            </div>
            <div className="header-btn">
              <MoreVertIcon style={{color:'#919191'}}/>
              
            </div>

          </div>
        </header>

        <div className="search">

        </div>
        <div className="chatlist">

        </div>
      </div>
      <div clasName="contetarea">

      </div>
    </div>
  );
}

export default App;
