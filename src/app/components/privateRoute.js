import React from 'react';
import { Redirect, Route } from 'react-router-dom';


export default function PrivateRoute({children, ...rest}) {
    
    return (
        <Route {...rest} render={() => {
            return rest.userAuthenticated === true
            ? children
            : <Redirect exact to='/login' />
        }} />
    )
}