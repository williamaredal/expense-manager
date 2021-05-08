import React from 'react';


export default function TransactionHistory (props) {

    return (
        <div>
            {props.transactionHistory.map( (transaction, i) => {
                const transactionDate = transaction.date.getDate() + '-' + (transaction.date.getMonth() + 1) + '-' + transaction.date.getFullYear();

                return (
                    <div key={i} onClick={() => {console.log([transaction]);}} className="transactionCard"> {/* onClick function can be used to pass transaction values on redirect*/}
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