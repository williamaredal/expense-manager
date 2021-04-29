import React, { useState } from 'react';

export default function Register () {
    const [isAuthenticated, authenticate] = useState(false);

    return (
        <div>
            <p>
                Register {isAuthenticated.toString()}
            </p>
        </div>
    )
}