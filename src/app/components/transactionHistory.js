import React from 'react';


export default function TransactionHistory (props) {

    return (
        <div>
            {props.transactionHistory.map( (transaction, i) => {
                const transactionDate = transaction.date.getDate() + '-' + (transaction.date.getMonth() + 1) + '-' + transaction.date.getFullYear();

                return (
                    <div key={i} onClick={() => {console.log([transaction]);}} className="transactionCard"> {/* onClick function can be used to pass transaction values on redirect*/}
                        <div className="cell">
                            <div>
                                <b>Account:</b> {transaction.transactionAccount}
                            </div>
                        </div>
                        <div className="cell">
                            <div>
                                <b>Ammount:</b> {transaction.ammount}
                            </div>
                        </div>
                        <div className="cell">
                            <div>
                                <b>Date:</b> {transactionDate}
                            </div>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}