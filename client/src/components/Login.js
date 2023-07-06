import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

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
    <div>
        
  <section className="vh-100">
  <div className="container-fluid h-custom my-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"/>
      </div>

      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form className='my-5'>
          
          <div className="form-outline mb-4">
          <input type="tel" className="form-control form-control-lg"  id="floatingInput" name='mobile' placeholder="Enter your registered mobile number" value={credentials.mobile} onChange={onChange}/>
            {/* <label className="form-label" htmlFor="floatingInput">Phone</label> */}
          </div>

          <div className="form-outline mb-3">
            <input type="password" className="form-control form-control-lg" id="floatingPassword" name='password' placeholder="Enter Password" value={credentials.password} onChange={onChange}/>
            {/* <label className="form-label" htmlFor="floatingPassword">Password</label> */}
          </div>

          <div className="d-flex justify-content-between align-items-center">
            
            <Link  className="text-body" to="/signup">Forgot password?</Link>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmit}
              >Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/signup"
                className="link-danger">Register</Link></p>
          </div>

        </form>
      </div>
    </div>
  </div>
 
</section>

    </div>
  )
}

export default Login;