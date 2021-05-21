import React, { useState } from 'react';
import { Redirect } from 'react-router';
import store from '../store';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return{
        transactions : state.transactions,
    }
}


function TransactionHistory (props) {

    const [redirectState, updateRedirect] = useState({
        redirect : false,
        path : '',
    });

    function openPage (currentPath, passedTransaction) {
        store.dispatch({
            type : 'expences/passTransaction',
            payload : {
                transactionNumber : passedTransaction.transactionID,
                parentAccount : passedTransaction.transactionAccount,
                amount : passedTransaction.amount,
                date : passedTransaction.date,
                title : passedTransaction.transactionTitle,
                description : passedTransaction.transactionDescription,
                authenticated : passedTransaction.transactionAuthenticated,
            }
        });
        updateRedirect({
            redirect : true,
            path : currentPath,
        });
    }


    return (
        <div>
            {redirectState.redirect ? <Redirect exact to={redirectState.path}/> : null}
            {props.transactions.map( (transaction, i) => {

                return (
                    <div key={i} onClick={() => {openPage('/transaction', transaction)}} className="transactionCard">
                        <div className="cell">
                            <b>Account:</b> {transaction.transactionAccount}
                        </div>
                        <div className="cell">
                            <b>Amount:</b> {transaction.amount}
                        </div>
                        <div className="cell">
                            <b>Date:</b> {new Date(transaction.date).toDateString()}
                        </div>
                        <div className="cell">
                            <b>Authenticated:</b> <b className={transaction.transactionAuthenticated ? "transactionAuthenticated" : "transactionWaiting"}>{transaction.transactionAuthenticated.toString()}</b>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


export default connect(mapStateToProps)(TransactionHistory);