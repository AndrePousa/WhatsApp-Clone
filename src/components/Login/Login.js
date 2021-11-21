import React from 'react';
import Api from '../../Api';
import './Login.css';

const Login = () =>{

  const handleFacebookLogin = async () =>{
    let result = await Api.fbPopup();
    if(result){

    }else{
      alert('Error !')
    }
  }

  return(
    <div className="login">
      <button onClick={handleFacebookLogin}>Logar com Facebook</button>
    </div>
  )
}

export default Login;