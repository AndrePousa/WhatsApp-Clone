import React,{useState} from 'react';
import './NewChat.css';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const NewChat = ({user,chatlist,show,setShow})=>{

  const [list, setList] = useState([
    {id:123, avatar:'https://previews.123rf.com/images/kritchanut/kritchanut1401/kritchanut140100054/25251050-businessman-avatar-profile-picture.jpg', name: 'André Roberto'}
  ]);

  const handleClose = () =>{
    setShow(false)
  }

  return(
    <div className="newChat" style={{left:show?0:-415}}>
      <div className="newChat-head">
        <div onClick={handleClose} className="newChat-backbutton">
          <ArrowBackIcon style={{color:'#fff'}}/>
        </div>
        <div className="newChat-headtitle">Nova Conversa</div>

      </div>
      <div className="newChat-list">
        {list.map((item, key) => (
          <div className="newChat-item" key={key}>
            <img className="newChat-itemavatar" src={item.avatar} alt=''/>
            <div className="newChat-itemname">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewChat;