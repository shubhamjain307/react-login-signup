import React from 'react';
import {
    Link, useNavigate
  } from "react-router-dom";
import {get, post} from '../Request';
import { useForm } from "react-hook-form";

function Registration(props) {

    let navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        post('users/registration', {email:data.email, password:data.password, name:data.name, otp:data.otp})
            .then((res) => {
                if (res.data.status == 200) {
                    alert('Registration successfull');
                    navigate('/');                
                } else {
                    alert(res.data.message);
                }
            });
    }

        let getOtp = (e) => {
            e.preventDefault();
            let email = document.getElementById('email');
            if (!email.value) {
                post('users/send-otp', {email:email.value})
                .then((res) => {
                    if (res.data.status == 200) {
                        alert('OPT has been sent to your email address');
                    }
                });
            }
        }

  
    return (
        <>
            <h1>Registration</h1>
            <div className="main-agileinfo">
                <div className="agileits-top">
                    <form action="#" method="post">
                        <input className="text" type="text" name="name" placeholder="Username" required="" />
                        <input className="text email" type="email" name="email" id="email" placeholder="Email" required="" />
                        <input className="text" type="password" name="password" placeholder="Password" required="" />
                        <input className="text w3lpass" type="password" name="confirm-password" placeholder="Confirm Password" required="" />
                        <input className="text" type="text" name="otp" placeholder="Email OTP" required="" />
                        <div className="wthree-text">
                            <label className="anim">
                                <input type="checkbox" className="checkbox" required="" />
                                <span>I Agree To The Terms & Conditions</span>
                            </label>
                            <div className="clear"> </div>
                        </div>
                        <input type="button" value="GET OTP" onClick={(e) => getOtp(e)} />
                        <input type="submit" value="SIGNUP" />
                    </form>
                    <p>I already have an account. <Link to="/"> Login Now!</Link></p>
                </div>
            </div>  
        </>
    );
}

export default Registration;