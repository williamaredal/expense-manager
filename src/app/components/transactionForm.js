import React, { useState } from 'react';
import store from '../store';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        passedAccount : state.parentAccount,
        passedTransaction : state.currentTransaction,
    }
}


function TransactionForm (props) {
    console.log(props.passedTransaction)
    // is missing transaction.date ??
    const [transactionDetails, updateTransaction] = useState({
        transactionNumber : (Object.keys(props.passedTransaction).length !== 0) ? props.passedTransaction.transactionID : Math.floor(Math.random()*10000000000000), // switch to uuid4 
        parentAccount : (props.passedAccount !== undefined) ? props.passedAccount : 'Parent Account', // passed through props
        ammount : (props.passedTransaction.ammount !== 0) ? props.passedTransaction.ammount : 0,
        transactionTitle : (props.passedTransaction.transactionTitle !== undefined) ? props.passedTransaction.transactionTitle : '',
        transactionDescription : (props.passedTransaction.transactionDescription !== undefined) ? props.passedTransaction.transactionDescription : '',
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

                <p className="titleUnderline"><b>Transaction: {transactionDetails.transactionNumber}</b></p>
                <input className="formInput" value={transactionDetails.transactionTitle ? transactionDetails.transactionTitle : ''} placeholder="Title" name="transactionTitle" onChange={(e) => {updateFormVars(e.target.name, e.target.value)}}/>
                <input className="formInput" value={transactionDetails.transactionDescription ? transactionDetails.transactionDescription : ''} placeholder="Description" name="transactionDescription" onChange={(e) => {updateFormVars(e.target.name, e.target.value)}}/>
                <input className="formInput" value={transactionDetails.ammount ? transactionDetails.ammount : ''} placeholder="Ammount" name="ammount" onChange={(e) => {updateFormVars(e.target.name, Number(e.target.value))}}/>
                <button className="button" onClick={() => authenticateExpence()}>Authenticate Expence</button>
                <button className="button" onClick={() => submitExpence()}>Submit Expence</button>


                <div>
                    <p>this is a transaction page with:</p>
                    <p>Title: {transactionDetails.transactionTitle}</p>
                    <p>Description: {transactionDetails.transactionDescription}</p>
                    <p>Ammount: {transactionDetails.ammount}</p>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(TransactionForm);