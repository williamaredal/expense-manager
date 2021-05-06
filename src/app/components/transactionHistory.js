import React, { useState } from 'react';
import { connect } from 'react-redux';
import store from '../store';

const mapStateToProps = (state) => {
    return {
        transactions : [...state.transactions],
    }
}

function TransactionHistory (props) {
    const [transactionHistory, updateHistory] = useState([
        ...props.transactions
    ]);

    store.subscribe( () => {
        updateHistory([
            ...props.transactions
        ])
    })
    
    return (
        <div>
            {transactionHistory.map( (transaction) => {
                return (
                    <div className="transactionCard">
                        <div className="cell">
                            {transaction.ammount}
                        </div>
                        <div className="cell">
                            {transaction.date}
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default connect(mapStateToProps)(TransactionHistory);