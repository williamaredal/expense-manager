import React, { useState } from 'react';
import { Redirect } from 'react-router';
import store from '../store';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        passedAccount : state.parentAccount,
        passedTransaction : state.currentTransaction,
        transactions : state.transactions,
    }
}


function TransactionForm (props) {

    const [redirectState, updateRedirect] = useState({
        redirect : false,
        path : '',
    });

    const [transactionDetails, updateTransaction] = useState({
        transactionNumber : props.passedTransaction.transactionID || Math.floor(Math.random()*10000000000000), // switch to uuid4 
        parentAccount : props.passedAccount || 'Parent Account Number', // passed through props
        amount : props.passedTransaction.amount || 0,
        date : props.passedTransaction.date || new Date().toString(),
        transactionTitle : props.passedTransaction.transactionTitle || '',
        transactionDescription : props.passedTransaction.transactionDescription || '',
        transactionAuthenticated : props.passedTransaction.transactionAuthenticated || false,
    });

    function updateFormVars (key, value) {
        updateTransaction({
            ...transactionDetails,
            [key] : value
        })
    }

    function submitExpence () {
        if (transactionDetails.transactionAuthenticated) {
            return alert('You cannot submit an already authenticated expence')
        }

        else {
            store.dispatch({
                type : 'expences/submitTransaction',
                payload : {
                    newTransactions : props.transactions.filter(t => (t.transactionID !== transactionDetails.transactionNumber)),
                    transactionNumber : transactionDetails.transactionNumber,
                    parentAccount : transactionDetails.parentAccount, 
                    amount : transactionDetails.amount,
                    date : transactionDetails.date,
                    title : transactionDetails.transactionTitle,
                    description : transactionDetails.transactionDescription,
                    authenticated : false,
                }
            });
            
            updateTransaction({
                transactionNumber : Math.floor(Math.random()*10000000000000), // switch to uuid4 
                parentAccount : 'Parent Account Number', // passed through props
                amount : 0,
                date : new Date().toString(),
                transactionTitle : '',
                transactionDescription : '',
                transactionAuthenticated : false,
            });

            return alert('Transaction submitted')
        }

    }
    
    function authenticateExpence () {

        if (transactionDetails.transactionAuthenticated) {
            return alert('You cannot modify an already authenticated expence')
        }

        else {
            store.dispatch({
                type : 'expences/authTransaction',
                payload : {
                    newTransactions : props.transactions.filter(t => (t.transactionID !== transactionDetails.transactionNumber)),
                    transactionNumber : transactionDetails.transactionNumber,
                    parentAccount : transactionDetails.parentAccount,
                    amount : transactionDetails.amount,
                    date : transactionDetails.date,
                    title : transactionDetails.transactionTitle,
                    description : transactionDetails.transactionDescription,
                    authenticated : true,
                }
            });
            
            updateTransaction({
                transactionNumber : Math.floor(Math.random()*10000000000000), // switch to uuid4 
                parentAccount : 'Parent Account Number', // passed through props
                amount : 0,
                date : new Date().toString(),
                transactionTitle : '',
                transactionDescription : '',
                transactionAuthenticated : false,
            });

            return alert('Transaction authenticated')
        }

    }

    function openPage (currentPath) {
        updateRedirect({
            redirect : true,
            path : currentPath,
        });
    }

    return (
        <div className="transactionFormCard">
            {redirectState.redirect ? <Redirect exact to={redirectState.path}/> : null}
            <div className="transactionForm">

                <p className="titleUnderline"><b>Transaction: {transactionDetails.transactionNumber}</b></p>
                
                <label className="formLabel">
                    Title:
                    <input className="formInput" value={transactionDetails.transactionTitle ? transactionDetails.transactionTitle : ''} placeholder="Title" name="transactionTitle" onChange={(e) => {updateFormVars(e.target.name, e.target.value)}}/>
                </label>

                <label className="formLabel">
                    Description:
                    <input className="formInput" value={transactionDetails.transactionDescription ? transactionDetails.transactionDescription : ''} placeholder="Description" name="transactionDescription" onChange={(e) => {updateFormVars(e.target.name, e.target.value)}}/>
                </label>

                <label className="formLabel">
                    Amount:
                    <input className="formInput" value={transactionDetails.amount ? transactionDetails.amount : ''} placeholder="Amount" name="amount" onChange={(e) => {updateFormVars(e.target.name, Number(e.target.value))}}/>
                </label>

                <button className="button" onClick={() => authenticateExpence()}>Authenticate Expence</button>
                <button className="button" onClick={() => submitExpence()}>Submit Expence</button>

                <button className="button" onClick={() => openPage('/')}>Back</button>

            </div>
        </div>
    )
}

export default connect(mapStateToProps)(TransactionForm);