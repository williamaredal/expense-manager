import React, { useState } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import Header from '../components/header';
import Footer from '../components/footer';
import  './homepage.css'


const mapStateToProps = (state) => {
    return {
        accountAvailableBalance : state.accountAvailableBalance,
        accountDueBalance : state.accountDueBalance,
        transactions : state.transactions
    }
}

function Dashboard (props) {
    const [availableBalance, updateAvailableBalance] = useState(store.getState().accountAvailableBalance);
    const [dueBalance, updateDueBalance] = useState(store.getState().accountDueBalance);
    const [accountNumber, updateAccountNumber] = useState(store.getState().accountNumber);
    const [accountTransactions, updateTransactions] = useState(store.getState().transactions.length);

    store.subscribe( () => {
        updateAvailableBalance(props.accountAvailableBalance)
        updateDueBalance(props.accountDueBalance)
        updateTransactions(props.transactions.length)
    });

    return (
        <div className="mainView">
            <Header />

            <div className="balanceView">
                
                <div className="balanceCard">

                    <div className="cell">
                        <div>
                            <b>Account:</b>
                        </div>
                        <div>
                            {accountNumber}
                        </div>
                    </div>

                    <div className="cell">
                        <div>
                            <b>Available Balance:</b>
                        </div>
                        <div>
                            {availableBalance}
                            {availableBalance <= 0 ? ' Pooooor' : ' Rich?'}
                        </div>
                    </div>

                    <div className="cell">
                        <div>
                            <b>Due Balance:</b>
                        </div>
                        <div>
                            {dueBalance}
                        </div>
                    </div>

                    <div className="cell">
                        <div>
                            <b>Transactions:</b>
                        </div>
                            <div>
                                {accountTransactions}
                            </div>
                    </div>

                </div>
                    

            </div>
            <div onClick={() => console.log('transactionHistory clicked')} className="specialButton">
                    <div>
                        View Transaction History:
                    </div>

            </div>

            <div onClick={() => console.log('authTransaction clicked')} className="specialButton">
                    <div>
                        Authenticate Transaction:
                    </div>

            </div>

            <Footer />

        </div>
    )
}

export default connect(mapStateToProps)(Dashboard);