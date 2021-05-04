import React, { useState } from 'react';
import store from '../store';

export default function Transaction (props) {
    const [transactionDetails, updateTransaction] = useState({
        ammount : 0,
        date : "",
    });

    function updateFormVars (key, value) {
        updateTransaction({
            ...transactionDetails,
            [key] : value
        })
    }

    function submitForm () {
        store.dispatch({
            type : 'expences/addTransaction',
            payload : {
                ammount : transactionDetails.ammount,
                date : transactionDetails.date
            }
        })
    }

    return (
        <div>
            <div>
            <input name="ammount" onChange={(e) => {updateFormVars(e.target.name, Number(e.target.value))}}/>
            <input name="date" onChange={(e) => {updateFormVars(e.target.name, e.target.value)}}/>
            <button onClick={() => submitForm()}>Add Expence</button>
            </div>
            <p>
                this is a transaction page with Ammount: {transactionDetails.ammount} Date: {transactionDetails.date}
            </p>
        </div>
    )
}