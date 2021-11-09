import React from 'react';
import {
    Link, useNavigate
  } from "react-router-dom";

function SignOut(props) {
    
    let navigate = useNavigate();
    let logout = () => {
        console.log('calling logout');
        localStorage.removeItem('token');
        navigate('/'); 
    }

    return (
        <>
            <div className="text-right"><img onClick={logout} src="./images/sign-out.png" className="signout" alt=""/></div>  
        </>
    );
}

export default SignOut;