import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const handleClick = async ()=>{
        if(!localStorage.getItem('token')){
            navigate('/login');
            return;
        }

        console.log("Go to test");
        const response = await fetch(`http://localhost:5000/api/user/verify-user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });
        const result = await response.json()
        console.log(result);
        if(result.success===true){
            navigate('/test');
        }
        else{
            navigate('login');
        }
    }
  return (
    <div>
        <h1>Home</h1>
        <div style={{textAlign:"center", margin:"15rem"}}>
        <button className='btn btn-primary' onClick={handleClick}> Take Test</button>

        </div>
    </div>
  )
}

export default Home