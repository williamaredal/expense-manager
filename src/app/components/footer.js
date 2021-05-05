import React from 'react';

export default function Footer (props) {
    return (
        <div className="footer">
            <button onClick={() => console.log('log out was clicked')} className="button">
                Log out
            </button>
        </div>
    )
}