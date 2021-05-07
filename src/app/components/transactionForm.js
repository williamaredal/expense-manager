import React, { useState } from 'react';
import store from '../store';

export default function TransactionForm (props) {
    const [transactionDetails, updateTransaction] = useState({
        transactionNumber : props.transactionNumber ? props.transactionNumber : Math.floor(Math.random()*10000000000000), // switch to uuid4 
        parentAccount : 'Parent Account', // passed through props
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
        // check if transactionNumber with transactionAccount already is in store, if so replace it to prevent duplicates
        store.dispatch({
            type : 'expences/addTransaction',
            payload : {
                transactionNumber : transactionDetails.transactionNumber,
                parentAccount : transactionDetails.parentAccount, 
                ammount : transactionDetails.ammount,
                title : transactionDetails.transactionTitle,
                description : transactionDetails.transactionDescription,
                authenticated : false,
            }
        });

        // redirect to dashboard
    }
    
    function authenticateExpence () {
        // check if transactionNumber with transactionAccount already is in store, if so replace it to prevent duplicates
        store.dispatch({
            type : 'expences/authTransaction',
            payload : {
                transactionNumber : transactionDetails.transactionNumber,
                parentAccount : transactionDetails.parentAccount,
                ammount : transactionDetails.ammount,
                title : transactionDetails.transactionTitle,
                description : transactionDetails.transactionDescription,
                authenticated : true,
            }
        });
        
        // redirect to dashboard
    }

    return (
        <div className="transactionFormCard">
            <div className="transactionForm">

                <p><b>Transaction: {transactionDetails.transactionNumber}</b></p>
                <input className="formInput" placeholder="ammount" name="ammount" onChange={(e) => {updateFormVars(e.target.name, Number(e.target.value))}}/>
                <input className="formInput" placeholder="title" name="transactionTitle" onChange={(e) => {updateFormVars(e.target.name, e.target.value)}}/>
                <input className="formInput" placeholder="description" name="transactionDescription" onChange={(e) => {updateFormVars(e.target.name, e.target.value)}}/>
                <button className="button" onClick={() => submitExpence()}>Submit Expence</button>
                <button className="button" onClick={() => authenticateExpence()}>Authenticate Expence</button>

                <div>
                    <p>this is a transaction page with:</p>
                    <p>Ammount: {transactionDetails.ammount}</p>
                    <p>Title: {transactionDetails.transactionTitle}</p>
                    <p>description: {transactionDetails.transactionDescription}</p>
                </div>
            </div>
        </div>
    )
}