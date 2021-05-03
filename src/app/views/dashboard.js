import React, { useState } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import  './homepage.css'

const mapStateToProps = (state) => {
    return {
        balance : state.balance,
    }
}

function Dashboard (props) {
    const [Balance, updateBalance] = useState(0);
    const [formValue, updateForm] = useState(0);
    const [account, updateAccount] = useState(3221412);
    const [transactions, updateTransactions] = useState(10);
    
    store.subscribe( () => {
        updateBalance(store.getState().balance)
    })

    return (
        <div className="balanceView">
            <div className="balanceCard">
                <div className="cell">
                    <p>
                        Account: {account}
                    </p>
                </div>
                <div className="cell">
                    <p>
                        Your balance is currently: {Balance}
                        {Balance === 0 ? ' Pooooor' : 'Rich?'}
                    </p>
                </div>
                <div className="cell">
                    <p>
                        Transactions: {transactions}
                    </p>
                </div>
            </div>
            <div>
                <input onChange={(e) => {updateForm(Number(e.target.value))}}/>
                <button onClick={() => store.dispatch({type : 'expences/balance', payload : formValue}) }>Add to balance</button>
            </div>

        </div>
    )
}

export default connect(mapStateToProps)(Dashboard);