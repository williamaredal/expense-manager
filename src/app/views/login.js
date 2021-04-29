import React, { useState } from 'react';

export default function Login () {
    const [isAuthenticated, authenticate] = useState(false);

    return (
        <div>
            <p>{isAuthenticated.toString()}</p>
        </div>
    )
}