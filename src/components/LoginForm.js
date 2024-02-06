import React, { useState } from 'react';
import AuthenticationService from './AuthenticationService';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import FacebookLoginComponent from './FacebookLoginComponent';
import './style/loginform.css'
//import './css/LoginForm.css'; // Add your own styles

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthenticationService.login(username, password);
      onLogin(response.data); // You might want to store user info in state or context
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleLogin} className="login-form">
        <label className='form-label'>
          Username
          <input type="text" className='form-input' value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label className='form-label'>
          Password
          <input type="password" className='form-input' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit" className='form-button'>Login</button>
      </form>
      <div className="or-divider">
      <span className="or-text">OR</span>
      </div>
      <div className='facebook-login-container'>
      <FacebookLoginComponent onLogin={handleLogin} ></FacebookLoginComponent>     
     </div>
    </div>
  );
};

export default LoginForm;