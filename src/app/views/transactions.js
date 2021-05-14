import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from '../components/header';
import Footer from '../components/footer';
import TransactionHistory from '../components/transactionHistory';
import './transactions.css';


const mapStateToProps = (state) => {
    return {
        accountNumber : state.accountNumber,
        availableBalance : state.accountAvailableBalance,
        dueBalance : state.accountDueBalance,
        transactions : state.transactions,
    }
}


function Transactions (props) {
    
    return (
        <div className="mainView">

            <Header />
            <div className="transactionsOverviewCard">
                <p className="titleUnderline"><b>Transaction History of Account {props.accountNumber}</b></p>
            </div>

            <div className="transactionsOverviewCard">
                <div className="transactionsOverview">
                    <div className="cell">
                        <b>Available Balance: </b>
                        {props.availableBalance}
                    </div>
                    <div className="cell">
                        <b>Due Balance: </b>
                        {props.dueBalance}
                    </div>
                    <div className="cell">
                        <b>Transactions: </b>
                        {props.transactions.length}
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