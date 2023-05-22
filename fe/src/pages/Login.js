import React from 'react';
import { Link , useNavigate } from 'react-router-dom';
import Logo from '../assets/LogoSingle.png'
import Close from '../assets/Close.png'
import './Login.css';  
import { useState} from 'react';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'

dotenv.config();

const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/auth/login`,{
        method: 'POST',
        headers: {
            'Content-type' : 'application/json',
        },
        body: JSON.stringify({
          "email" : email,
          "password" : password
      }),
    })
    .then(d => d.json())
    
    .catch((e)=>{console.log(e)})
     
    const decoded = jwt.verify(response.token, apiKey.toString('utf-8'))
    let userdata = await fetch(`${apiUrl}/patient/${decoded.id}`).then(d=> d.json())
    userdata.password = ''
    localStorage.setItem("patientMail", userdata.email)
    navigate('/dashboard')
  } catch (error) {
    
      console.error(error);
    }
  };
    return (
      
      <div className="signup-container">
          <span > <img src={Close} alt=''/> </span>
        <form onSubmit={handleSubmit}>
        <span className="logo-container"> <img src={Logo} alt=''/> </span>
        <h1 className="header">LOGIN</h1>


        <label className="input-label"> Email </label>
        <input className="input-field" type='email' value={email} onChange={(e) => setEmail(e.target.value)} />

        <label className="input-label"> Password </label>
        <input className="input-field" type='password' alue={password} onChange={(e) => setPassword(e.target.value)} />
  
        <div className="checkbox-container">
            <input type='checkbox' /> 
            <span>Remeber Me </span> <span> <Link to="/forgetPassword">Forgot Password</Link> </span> 
        </div>

        <button className="submit-button" type='submit' >LOGIN </button>
        <span className="login-link">Don't have an account? <Link to="/signup">Create an account</Link> </span> 
      </form>
   
</div>


    );
}



export default Login;
