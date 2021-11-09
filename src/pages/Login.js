import React from 'react';
import {
    Link, useNavigate
  } from "react-router-dom";
import {get, post} from '../Request';
import { useForm } from "react-hook-form";

function Login(props) {

    let navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        post('users/login', {email:data.email, password:data.password})
            .then((res) => {
                localStorage.setItem("token", res.data.data.token);
                navigate('/home');                
            });
    }
  
    return (
        <>
            <h1>Login</h1>
            <div className="main-agileinfo">
                <div className="agileits-top">
                    <form method="post"  onSubmit={handleSubmit(onSubmit)}>
                        <input className="text email" type="email" name="email" placeholder="Email" required=""  {...register("email")}/>
                        <input className="text" type="password" name="password" placeholder="Password" required=""  {...register("password")}/>
                        <input type="submit" value="LOGIN" />
                    </form>
                    <p>Don't have an Account? <Link to="/register"> Registration Now!</Link></p>
                </div>
            </div>  
        </>
    );
}

export default Login;