import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

const Register_M = () => {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({name:"" , email:"" , password:"", gender:"" , age:"" , address:"" , city:"" , country:"" , mobile:""});

    const handleSubmit = async (e)=>{
        e.preventDefault();
        // console.log("here: ", credentials);
        const response = await fetch(`http://localhost:5000/api/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        let response1 = await response.json();
        if(response1.success==true){
            navigate("/login");
        }
        else{
            alert("Cannot register, try again");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }


  return (
    <section className="vh-100">
    <div style={{textAlign:"center"}} ><h2>Registration</h2></div>
        <div className='registerForm'>
            <div>

            <div className="container-fluid h-custom my-5">
                <div className="row d-flex justify-content-center align-items-center h-100">



                <form>
                    <div className="form-outline mb-3 formInput ">
                        <input  type="string" className="form-control form-control-lg" name='name'  placeholder='Full Name' value={credentials.name} onChange={onChange}/>
                    </div>
                    <div className="form-outline mb-3 formInput ">
                        <input  type="email" className="form-control form-control-lg" name='email' placeholder='Email' value={credentials.email} onChange={onChange}/>
                    </div>
                    <div className="form-outline mb-3 formInput ">
                        <input  type="string" className="form-control form-control-lg" name='password'  placeholder='Password' value={credentials.password} onChange={onChange}/>
                    </div>
                    <div class="row ">
                        <div className="col form-outline mb-3 formInput ">
                            <select className="form-control form-control-lg" name='gender' placeholder='Gender' value={credentials.gender} onChange={onChange}>
                                <option hidden selected>Gender</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                            </select>
                        </div>
                        <div className="col form-outline mb-3 formInput ">
                            <input  type="number" className="form-control form-control-lg" name='age'  placeholder='Age' value={credentials.age} onChange={onChange}/>
                        </div>
                    </div>
                    <div className="form-outline mb-3 formInput ">
                        <input  type="string" className="form-control form-control-lg" name='address'  placeholder='Address' value={credentials.address} onChange={onChange}/>
                    </div>
                    <div className='row'>
                        <div className="col form-outline mb-3 formInput ">
                            <input  type="string" className="form-control form-control-lg" name='city'  placeholder='City' value={credentials.city} onChange={onChange}/>
                        </div>
                        <div className="col form-outline mb-3 formInput ">
                            <input  type="string" className="form-control form-control-lg" name='country'  placeholder='Country' value={credentials.country} onChange={onChange}/>
                        </div>
                    </div>
                    <div className="form-outline mb-3 formInput ">
                        <input  type="string" className="form-control form-control-lg" name='mobile'  placeholder='Mobile' value={credentials.mobile} onChange={onChange}/>
                    </div>
                </form>
                <div>
                
                <Link  className="" to="/login">Forgot password?</Link>
                
            </div>

            <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmit}
            >Register</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <Link to="/login"
                className="link-danger">login</Link></p>
            
            </div>
            </div>

        </div>
            
        </div>
        </div>
    </section>
  )
}

export default Register_M;
