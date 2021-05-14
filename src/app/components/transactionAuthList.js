import React, { useEffect, useState } from 'react';
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
                ammount : transaction.ammount,
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
                const transactionDate = filteredTransaction.date.getDate() + '-' + (filteredTransaction.date.getMonth() + 1) + '-' + filteredTransaction.date.getFullYear();

                return (
                    <div key={i} className="authenticateCard">
                        <div className="cell">
                            <b>Account:</b> {filteredTransaction.transactionAccount}
                        </div>
                        <div className="cell">
                            <b>Ammount:</b> {filteredTransaction.ammount}
                        </div>
                        <div className="cell">
                            <b>Date:</b> {transactionDate}
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