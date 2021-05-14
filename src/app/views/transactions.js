import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from '../components/header';
import Footer from '../components/footer';
import TransactionHistory from '../components/transactionHistory';
import './transactions.css';


const mapStateToProps = (state) => {
    return {
        currentState : state,
    }
}


function Transactions (props) {
    const [transactionsAccount, updateAccount] = useState({
        accountNumber : props.currentState.accountNumber,
        availableBalance : props.currentState.accountAvailableBalance,
        dueBalance : props.currentState.accountDueBalance,

    });
    const [transactionHistory, updateHistory] = useState([
        ...props.currentState.transactions
    ]);

    
    return (
        <div className="mainView">

            <Header />
            <div className="transactionsOverviewCard">
                <p className="titleUnderline"><b>Transaction History of Account {transactionsAccount.accountNumber}</b></p>
            </div>

            <div className="transactionsOverviewCard">
                <div className="transactionsOverview">
                    <div className="cell">
                        <b>Available Balance: </b>
                        {transactionsAccount.availableBalance}
                    </div>
                    <div className="cell">
                        <b>Due Balance: </b>
                        {transactionsAccount.dueBalance}
                    </div>
                    <div className="cell">
                        <b>Transactions: </b>
                        {transactionHistory.length}
                    </div>
                </div>
            </div>
            
            <div className="transactionHistoryCard">
                <TransactionHistory />
            </div>

            <Footer />

        </div>
    )
}

export default connect(mapStateToProps)(Transactions);