import React, {useEffect, useState} from 'react';
import {
    Link, useNavigate
  } from "react-router-dom";
import {get, put, post} from '../Request';
import { useForm } from "react-hook-form";
import SignOut from '../components/SignOut';

function ProfileUpdate (props) {

    let navigate = useNavigate();

    const [state, setState] = useState(null);
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(()=> {
        if (!state) {
            get('users/user-profile')
            .then(response => {
                if (response.data.status == 200) {
                    setName(response.data.data.name);
                    setState(response.data.data);
                }
            })
        }
    });
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append("profile", selectedFile);

        let fileName = '';
        post('users/upload', formData)
            .then((res) => {
                if (res.data.status == 200)  {
                    fileName = res.data.data.originalname;
                }
                put('users/profile', {name:name, profile_pic:fileName})
                    .then((res) => {
                        navigate('/home');                
                    })
            });
    }
    
    const onFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    }
    return (
        <>
            <SignOut />
            <h1>Update Profile</h1>
            <div className="main-agileinfo">
                <div className="agileits-top text-light">
                    <form method="post"  onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="">Name</label>
                        <input className="text" type="text" name="name" placeholder="Name" value={name} required=""  {...register("name")} onChange={(e) => {setName(e.target.value)}}/>
                        
                        <br/>
                        <label htmlFor="">Profile Pic</label>
                        <input className="form-control" type="file" name="profile" placeholder="Profile Pic" required=""  onChange={onFileChange}/>
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