import React, { useState } from 'react';
import { connect } from 'react-redux';
import store from '../store'; 


const mapStateToProps = (state) => {
    return{
        transactions : state.transactions,
    }
}

function TransactionAuthList (props) {

    function authTransaction (transaction) {
        store.dispatch({
            type : 'expences/authTransaction',
            payload : {
                newTransactions : props.transactions.filter(t => t.transactionID !== transaction.transactionID),
                transactionNumber : transaction.transactionID,
                parentAccount : transaction.transactionAccount,
                amount : transaction.amount,
                date : transaction.date,
                title : transaction.transactionTitle,
                description : transaction.transactionDescription,
                authenticated : true,
            }
        });
    }


    return (
        <div>
            {props.transactions.filter( transaction => transaction.transactionAuthenticated === false).map( (filteredTransaction, i) => {

                return (
                    <div key={i} className="authenticateCard">
                        <div className="cell">
                            <b>Account:</b> {filteredTransaction.transactionAccount}
                        </div>
                        <div className="cell">
                            <b>Amount:</b> {filteredTransaction.amount}
                        </div>
                        <div className="cell">
                            <b>Date:</b> {new Date(filteredTransaction.date).toDateString()}
                        </div>
                        <div className="cell">
                            <button className="authenticateButton" onClick={() => authTransaction(filteredTransaction)}>Authenticate</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


export default connect(mapStateToProps)(TransactionAuthList);