import React, { useState } from 'react';
import store from '../store';

export default function Transaction (props) {
    const [transactionDetails, updateTransaction] = useState({
        ammount : 0,
        transactionTitle : '',
        transactionDescription : '',
    });

    function updateFormVars (key, value) {
        updateTransaction({
            ...transactionDetails,
            [key] : value
        })
    }

    function submitExpence () {
        store.dispatch({
            type : 'expences/addTransaction',
            payload : {
                ammount : transactionDetails.ammount,
                title : transactionDetails.transactionTitle,
                description : transactionDetails.transactionDescription,
                authenticated : false,
            }
        })
    }
    
    function authenticateExpence () {
        store.dispatch({
            type : 'expences/addTransaction',
            payload : {
                ammount : transactionDetails.ammount,
                title : transactionDetails.transactionTitle,
                description : transactionDetails.transactionDescription,
                authenticated : true,
            }
        })
    }

    return (
        <div>
            <div className="form">
                <input placeholder="ammount" name="ammount" onChange={(e) => {updateFormVars(e.target.name, Number(e.target.value))}}/>
                <input placeholder="title" name="transactionTitle" onChange={(e) => {updateFormVars(e.target.name, e.target.value)}}/>
                <input placeholder="description" name="transactionDescription" onChange={(e) => {updateFormVars(e.target.name, e.target.value)}}/>
                <button className="button" onClick={() => submitExpence()}>Submit Expence</button>
                <button className="button" onClick={() => authenticateExpence()}>Authenticate Expence</button>

            </div>
            <p>
                this is a transaction page with:
            </p>
            <p>
                Ammount: {transactionDetails.ammount}
            </p>
            <p>
                Title: {transactionDetails.transactionTitle}
            </p>
            <p>
                description: {transactionDetails.transactionDescription}
            </p>
        </div>
    )
}