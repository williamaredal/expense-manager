import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from '../components/header';
import Footer from '../components/footer';
import  './homepage.css'
import { Redirect } from 'react-router';


const mapStateToProps = (state) => {
    return {
        accountNumber : state.accountNumber,
        accountAvailableBalance : state.accountAvailableBalance,
        accountDueBalance : state.accountDueBalance,
        transactions : state.transactions
    }
}

function Dashboard (props) {
    const [availableBalance, updateAvailableBalance] = useState(props.accountAvailableBalance);
    const [dueBalance, updateDueBalance] = useState(props.accountDueBalance);
    const [accountNumber, updateAccountNumber] = useState(props.accountNumber);
    const [accountTransactions, updateTransactions] = useState(props.transactions.length);

    const [redirectState, updateRedirect] = useState({
        redirect : false,
        path : '',
    });

    function openPage (currentPath) {
        updateRedirect({
            redirect : true,
            path : currentPath,
        })
    }


    return (
        <div className="mainView">
            { redirectState.redirect ? <Redirect exact to={redirectState.path} /> : null}
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

            <div onClick={() => {openPage('/transaction')}} className="specialButton">
                    <div>
                        Add a new Transaction:
                    </div>
            </div>

            <div onClick={() => {openPage('/transactionHistory')}} className="specialButton">
                    <div>
                        View Transaction History:
                    </div>
            </div>

            <div onClick={() => {openPage('/transactionAuthentication')}} className="specialButton">
                    <div>
                        Authenticate Transaction:
                    </div>
            </div>

            <Footer />

        </div>
    )
}

export default connect(mapStateToProps)(Dashboard);