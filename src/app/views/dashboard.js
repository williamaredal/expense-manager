import React, { useState } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import  './homepage.css'

const mapStateToProps = (state) => {
    return {
        balance : state.balance,
        transactions : state.transactions
    }
}

function Dashboard (props) {
    const [accountBalance, updateBalance] = useState(store.getState().balance);
    const [accountNumber, updateAccountNumber] = useState(3221412);
    const [accountTransactions, updateTransactions] = useState(store.getState().transactions.length);

    store.subscribe( () => {
        updateBalance(props.balance)
        updateTransactions(props.transactions.length)
    });

    return (
        <div className="balanceView">
            <div className="balanceCard">
                <div className="cell">
                        Account: {accountNumber}
                </div>
                <div className="cell">
                        Your balance is currently: {accountBalance}
                        {accountBalance <= 0 ? ' Pooooor' : 'Rich?'}
                </div>
                <div className="cell">
                        Transactions: {accountTransactions}
                </div>
            </div>

        </div>
    )
}

export default connect(mapStateToProps)(Dashboard);