import React, {useEffect, useState} from 'react';
import {
    Link, useNavigate
  } from "react-router-dom";
import {get, post} from '../Request';
import { useForm } from "react-hook-form";
import SignOut from '../components/SignOut';

function ProfileUpdate (state) {

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
            <SignOut />
            <h1>Update Profile</h1>
            <div className="main-agileinfo">
                <div className="agileits-top text-light">
                    <form method="post"  onSubmit={handleSubmit(onSubmit)}>
                        <input className="text" type="text" name="name" placeholder="Name" required=""  {...register("name")}/>
                        
                        <br/>
                        <label htmlFor="">Profile Pic</label>
                        <input className="form-control" type="file" name="profile_pic" placeholder="Profile Pic" required=""  {...register("profile_pic")}/>
                        <div className="row">
                            <div className="col-md-6">
                                <input type="submit" value="Update" />
                            </div>
                            <div className="col-md-6">
                                <br/>
                                <br/>
                                <Link to="/home" className="btn btn-light" >Cancel</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>  
        </>
    );
}

export default ProfileUpdate;