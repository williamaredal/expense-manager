import React, {useState} from 'react';
import  './homepage.css'


export default function Dashboard () {
    const [balance, updateBalance] = useState(0);
    const [account, updateAccount] = useState(3221412);
    const [transactions, updateTransactions] = useState(10);

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
                        Your balance is currently: {balance}
                        {balance === 0 ? ' Pooor' : 'Rich?'}
                    </p>
                </div>
                <div className="cell">
                    <p>
                        Transactions: {transactions}
                    </p>
                </div>
            </div>

        </div>
    )
}