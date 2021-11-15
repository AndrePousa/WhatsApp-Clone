import React from 'react';
import './ChatIntro.css';
import WhatsApp from  '../../images/intro-connection-whatssap.jpg'


const ChatIntro = () =>{
  return(
    <div className="chatIntro">
      <img src={WhatsApp} alt=""/>
      <h1>Mantenha seu celular conectado</h1>
      <h2>O WhatsApp conecta ao seu telefone para sincronizar suas mensagens.<br/>
        Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.
      </h2>
      
    </div>
  )
}

export default ChatIntro;