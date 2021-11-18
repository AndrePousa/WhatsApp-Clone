import React,{useState, useEffect, useRef} from 'react';
import EmojiPicker from 'emoji-picker-react'; //Emojis
import './ChatWindow.css'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import MessageItem from '../MessageItem/MessageItem';

const ChatWindow = ({user}) => {

  const body = useRef();

  let recognition = null;
  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(SpeechRecognition !== undefined){
    recognition = new SpeechRecognition();
  }

  const[emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);
  const [list, seList] = useState([
    {author:123, body:'kakakakakakakakakakakakak'},
    {author:123, body:'kakakakakakakakakakakakak'},
    {author:1234, body:'kakakakakakakakakakakakak'},
    {author:123, body:'kakakakakakakakakakakakak'},
    {author:123, body:'kakakakakakakakakakakakak'},
    {author:1234, body:'kakakakakakakakakakakakak'},
    {author:123, body:'kakakakakakakakakakakakak'},
    {author:123, body:'kakakakakakakakakakakakak'},
    {author:1234, body:'kakakakakakakakakakakakak'},
    {author:123, body:'kakakakakakakakakakakakak'},
    {author:123, body:'kakakakakakakakakakakakak'},
    {author:1234, body:'kakakakakakakakakakakakak'},
    {author:123, body:'kakakakakakakakakakakakak'},
    {author:123, body:'kakakakakakakakakakakakak'},
    {author:1234, body:'kakakakakakakakakakakakak'},
    {author:123, body:'kakakakakakakakakakakakak'},
    {author:123, body:'kakakakakakakakakakakakak'},
    {author:1234, body:'kakakakakakakakakakakakak'},
    {author:123, body:'kakakakakakakakakakakakak'},
    {author:123, body:'kakakakakakakakakakakakak'},
    {author:1234, body:'kakakakakakakakakakakakak'},
    {author:123, body:'kakakakakakakakakakakakak'},
    {author:123, body:'kakakakakakakakakakakakak'},
    {author:1234, body:'kakakakakakakakakakakakak'},
  ]);

  useEffect(()=>{
    if(body.current.scrollHeight > body.current.offsetHeight){
      body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
    }
  },[list])

  const handleEmojiClick = (e, emojiObject) =>{
    setText(text + emojiObject.emoji); 
  }

  //Abrindo e fechando os Emoji
  const handleOpenEmoji = () =>{
    setEmojiOpen(true);
  }

  const handleCloseEmoji = () =>{
    setEmojiOpen(false);
  }

  const handleMicClick = () =>{
    if(recognition !== null) {

      recognition.onstart = () =>{
        setListening(true);
      }
      recognition.onend = () =>{
        setListening(false);
      }
      recognition.onresult = (e) =>{
        setText(e.results[0][0].transcript);
      }
      recognition.start();
    }
  }

  const handleSendClick = () =>{

  }

  return(
    <div className="chatWindow">
      <div className="chatWindow-header">
        <div className="chatWindow-headerInfo">
          <img className="chatWindow-avatar" src="https://previews.123rf.com/images/kritchanut/kritchanut1401/kritchanut140100054/25251050-businessman-avatar-profile-picture.jpg" alt=""/>
          <div className="chatWindow-name">André Roberto</div>
        </div>

        <div className="chatWindow-headerButtons">
          <div className="chatWindow-btn">
            <SearchIcon style={{color:'#919191'}}/>
          </div>
          <div className="chatWindow-btn">
            <AttachFileIcon style={{color:'#919191'}}/>
          </div>
          <div className="chatWindow-btn">
            <MoreVertIcon style={{color:'#919191'}}/>
          </div>

        </div>

      </div>
      <div ref={body} className="chatWindow-body">
        {list.map((item, key) => (
          // componente da mensagem
          <MessageItem
            key={key}
            data={item}
            user={user}
          />

        ))}

      </div>
      {/* Area dos emojis */}
      <div className="chatWindow-emojiarea" style={{height: emojiOpen? '200px': '0px'}}>
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </div>

      <div className="chatWindow-footer">

        <div className="chatWindow-pre">

          <div 
          className="chatWindow-btn"
          onClick={handleCloseEmoji}
          style={{width: emojiOpen? 40 : 0}}
          >
            <CloseIcon style={{color:'#919191'}}/>
          </div>

          <div
          className="chatWindow-btn"
          onClick={handleOpenEmoji}
          >
            <InsertEmoticonIcon style={{color: emojiOpen? '#009688' : '#919191'}}/>
          </div>

        </div>

        <div className="chatWindow-inputArea">
          <input
            className="chatWindow-input" 
            type="text"
            placeholder="Digite sua mensagem"
            value={text} /* variavel que recebe o valor do input */
            onChange={e => setText(e.target.value)} /* envia oque for digitado no input para a variavel */
            />
        </div>

        <div className="chatWindow-pos">

          {text === '' &&
            <div onClick={handleMicClick} className="chatWindow-btn">
              <MicIcon style={{color: listening? '#126ece' : '#919191'}}/>
            </div>
          }
          {text !== '' &&
            <div onClick={handleSendClick} className="chatWindow-btn">
              <SendIcon style={{color:'#919191'}}/>
            </div>
          }

        </div>

      </div>
    </div>

  );
}

export default ChatWindow;