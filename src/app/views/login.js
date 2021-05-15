import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import './login.css';

const mapStateToProps = (state) => {
    return{
        currentState : state
    }
}


function Login () {

    const [redirectState, updateRedirect] = useState({
        redirect : false,
        path : '',
    });

    const [isAuthenticated, authenticate] = useState(false);
    const [loginDetails, updateDetails] = useState({
        username : '',
        password : '',
    });

    function updateFormVars (key, value) {
        updateDetails({
            ...loginDetails,
            [key] : value,
        });
    }

    function loginUser () {
        console.log('user sign in trial with these details: ', loginDetails);
        console.log('if authenticated the user was redirected to dashboard page');
        // openPage('/')

    }
    
    function openPage (currentPath) {
        updateRedirect({
            redirect : true,
            path : currentPath,
        });
    }

    return (
        <div className="mainView">
            <div className="loginTitle">
                <h1>
                    Sign in
                </h1>
            </div>

            <div className="loginFormCard">

                {redirectState.redirect ? <Redirect exact to={redirectState.path} /> : null}
                <form className="loginForm">
                    
                    <label className="formLabel">
                        Username:
                        <input className="formInput" required name="username" type="text" onChange={(e) => updateFormVars(e.target.name, e.target.value)}></input>
                    </label>   

                    <label className="formLabel">
                        Password:
                        <input className="formInput" required name="password" type="password" onChange={(e) => updateFormVars(e.target.name, e.target.value)}></input>
                    </label>

                    <button className="button" onClick={() => loginUser()}>Sign in</button>
                    <button className="button" onClick={() => openPage('/register')}>Register</button>                    

                </form>

            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Login);