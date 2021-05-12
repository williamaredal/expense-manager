import React, { useState } from 'react';
import { Redirect } from 'react-router';


export default function Header () {
    const [redirectState, updateRedirect] = useState({
        redirect : false,
        path : '',
    })
    function openPage (currentPath) {
        updateRedirect({
            redirect : true,
            path : currentPath,
        })
    }

    return (
        <div className="header">
            {redirectState.redirect ? <Redirect exact to={redirectState.path}/> : null}
            <h1 className="headerLink" onClick={() => openPage('/')}> Expence Manager</h1>
        </div>
    )
}