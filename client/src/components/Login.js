import React, { useState } from 'react'
import { FaPhone, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import css from "../css/login.css";

const Login = () => {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({mobile: "", password: ""});

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log("here: ", credentials);
        const response = await fetch(`http://localhost:5000/api/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        const result = await response.json()
        console.log(result);
        if("token" in result){
            localStorage.setItem('token', result["token"]);
            navigate("/");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }


  return (
    <div className="login">
    
    <div className="main">

      <div className="webName">
        <img className="logo" src={logo} alt="logo"></img>
        <h5 className="website-name">Hey Entrepreneur!</h5>
      </div>

      <div className="welcome">
        <h4>Welcome Back</h4>
        <p>Welcome Back, Please Enter Your Details.</p>
      </div>

      <div className="formBox">

        <div className="fieldBox">
          <div className="icon">
            <FaPhone />
          </div>
          <div className="line">
            
          </div>
           <input type="tel" 
               className="field"  
               name='mobile' 
               placeholder="Enter your registered mobile number" 
               value={credentials.mobile} 
               onChange={onChange}/>
               </div>

        <div className="fieldBox">
          <div className="icon">
             <FaLock />
          </div>
          <div className="line">
              
          </div>
            <input type="password" 
               className="field"  
               name='password' 
               placeholder="Enter your Password" 
               value={credentials.password} 
               onChange={onChange}/>
               </div>

               <div className="forgot-password">
            <Link  className="forgot-link" to="/signup">Forgot password?</Link>
          </div>

          <div className="login-signup">
            <button type="button" className="button" onClick={handleSubmit}
              >Login</button>
          </div>

          <div className="register">  
            <p>Don't have an account? 
            <Link className="register-link" to="/register" >Register</Link></p>
          </div>
            
      </div>

    </div>

  </div>
  )
}

export default Login;