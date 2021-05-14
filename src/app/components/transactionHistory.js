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
                ammount : passedTransaction.ammount,
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
                const transactionDate = transaction.date.getDate() + '-' + (transaction.date.getMonth() + 1) + '-' + transaction.date.getFullYear();

                return (
                    <div key={i} onClick={() => {openPage('/transaction', transaction)}} className="transactionCard">
                        <div className="cell">
                            <b>Account:</b> {transaction.transactionAccount}
                        </div>
                        <div className="cell">
                            <b>Ammount:</b> {transaction.ammount}
                        </div>
                        <div className="cell">
                            <b>Date:</b> {transactionDate}
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