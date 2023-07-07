import React from 'react'
import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import Quiz from "./Quiz";

const Test = () => {
    const navigate = useNavigate();
    const [isLoggedin, setIsLoggedin] = useState(false);

    useEffect(() => {
        verifyUser();
    }, [])

    const verifyUser = async ()=>{
        const response = await fetch(`http://localhost:5000/api/user/verify-user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });
        const result = await response.json();
        if(result.success === false){
            console.log("Token is not verified");
            // navigate("/login");
        }
        else{
            setIsLoggedin(true);
        }
    }
    
  return (
    <>
        {
            !isLoggedin?(<>
                {/* USER IS *NOT* LOGGED IN */}
                <h1>Please Login</h1>
                <h1>Please Login</h1>
                <button onClick={()=>{navigate('/login')}} >Go to Login</button>
            </>):(<>

                {/* USER IS LOGGED IN */}
                <Quiz/>
            </>)
        }
        

    </>
  )
}

export default Test