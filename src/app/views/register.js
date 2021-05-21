import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Header from '../components/header';
import './registration.css';

const mapStateToProps = (state) => {
    return{
        currentState : state
    }
}


function Register () {

    const [redirectState, updateRedirect] = useState({
        redirect : false,
        path : '',
    });

    const [isAuthenticated, authenticate] = useState(false);
    const [registrationDetails, updateDetails] = useState({
        email : '',
        username : '',
        password : '',
    });

    function updateFormVars (key, value) {
        updateDetails({
            ...registrationDetails,
            [key] : value,
        });
    }

    function registerUser () {
        console.log('user was registered with these details: ', registrationDetails);
        console.log('then the user was redirected to login page');
        // openPage('/login')

    }
    
    function openPage (currentPath) {
        updateRedirect({
            redirect : true,
            path : currentPath,
        });
    }

    return (
        <div className="mainView">
            
            <Header />

            <div className="registrationTitle">
                <h1>
                    Register
                </h1>
            </div>

            <div className="registrationFormCard">

                {redirectState.redirect ? <Redirect exact to={redirectState.path} /> : null}
                <form className="registrationForm">
                    
                    <label className="formLabel">
                        Email:
                        <input className="formInput" required name="email" type="email" onChange={(e) => updateFormVars(e.target.name, e.target.value)}></input>
                    </label>
                    
                    <label className="formLabel">
                        Username:
                        <input className="formInput" required name="username" type="text" onChange={(e) => updateFormVars(e.target.name, e.target.value)}></input>
                    </label>   

                    <label className="formLabel">
                        Password:
                        <input className="formInput" required name="password" type="password" onChange={(e) => updateFormVars(e.target.name, e.target.value)}></input>
                    </label>
                    
                    <button className="button" onClick={() => registerUser()}>Register</button>
                    <button className="button" onClick={() => openPage('/login')}>Sign in</button>
                </form>

            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Register);