import React, {useEffect, useState} from 'react';
import {
    Link
  } from "react-router-dom";
import {get, post} from '../Request';
import { useForm } from "react-hook-form";
import SignOut from '../components/SignOut';

function Home(props) {

    const [state, setState] = useState(null);
    let userData = {};

    useEffect(()=> {
        if (!state) {

            get('users/user-profile')
            .then(response => {
                console.log(response);
                setState(response.data.data);
            })
        }
    });

    return (
        <>
            <SignOut />
            <h1>Dashboard</h1>
            <div className="main-agileinfo">
                <div className="agileits-top text-light">
                    <div className="row">
                        <div className="col-md-4">
                            {state && state.image != undefined ? <img className="profile-pic" src={state.image} />:''}
                        </div>
                        <div className="col-md-8">
                            Hi {state ? state.name:""}<br />
                            <strong>Email : </strong>{state? state.email:''}<br />
                            <br/>
                            <Link to="/update-profile"><button class="btn btn-light">Update Profile</button></Link>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
}

export default Home;