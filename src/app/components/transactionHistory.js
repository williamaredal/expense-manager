import React, { useState } from 'react';
import { Redirect } from 'react-router';


export default function TransactionHistory (props) {
    
    const [redirectState, updateRedirect] = useState({
        redirect : false,
        path : '',
        props : {},
    });

    function openPage (currentPath, passProps) {
        updateRedirect({
            redirect : true,
            path : currentPath,
            props : passProps,
        });
        console.log(redirectState)
    }

    return (
        <div>
            {redirectState.redirect ? <Redirect exact to={{pathname : '/transaction', state : { passedTransaction : redirectState.props, parentAccount : props.transactionsAccount}}}/> : ''}
            {props.transactionHistory.map( (transaction, i) => {
                const transactionDate = transaction.date.getDate() + '-' + (transaction.date.getMonth() + 1) + '-' + transaction.date.getFullYear();

                return (
                    <div key={i} onClick={() => {openPage('/transaction', transaction)}} className="transactionCard"> {/* onClick function can be used to pass transaction values on redirect*/}
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