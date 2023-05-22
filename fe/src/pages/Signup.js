import React, { useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import Logo from '../assets/LogoSingle.png';
import Close from '../assets/Close.png';
import './Signup.css';

const apiUrl = process.env.REACT_APP_API_URL;

function Signup() {

  localStorage.setItem("patientMail", '')
  
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
       await fetch(`${apiUrl}/auth/signUp`,{
        method: 'POST',
        headers: {
            'Content-type' : 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
    }).then(navigate('/')).catch((e)=>{console.log(e)})
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signup-container">
      <span>
        <img src={Close} alt="" />
      </span>
      <form onSubmit={handleSubmit}>
        <span className="logo-container">
          <img src={Logo} alt="" />
        </span>
        <h1 className="header">CREATE ACCOUNT</h1>

        <label className="input-label"> Name </label>
        <input
          className="input-field"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="input-label"> Email </label>
        <input
          className="input-field"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="input-label"> Password </label>
        <input
          className="input-field"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="checkbox-container">
          <input type="checkbox" />
          <span>
            I accept the <Link to="/terms">Terms & Conditions</Link>
          </span>
        </div>

        <button className="submit-button" type="submit">
          CREATE ACCOUNT
        </button>
        <span className="login-link">
          Already have an account <Link to="/">Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Signup;
