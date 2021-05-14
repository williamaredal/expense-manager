import React, { useState } from 'react';
import { connect } from 'react-redux';
import Footer from '../components/footer';
import Header from '../components/header';
import TransactionAuthList from '../components/transactionAuthList';
import './transactionAuth.css'


const mapStateToProps = (state) => {
    return{
        currentState : state,
        availableBalance : state.accountAvailableBalance,
        dueBalance : state.accountDueBalance,
        transactions : state.transactions,
    }
}


function TransactionAuthentication (props) {

    return (
        <div className="mainView">
            
            <Header />

            <div className="transactionsOverviewCard">
                <p className="titleUnderline"><b>Authenticate Transactions of Account {props.currentState.accountNumber}</b></p>
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
                {props.transactions.filter(t => t.transactionAuthenticated !== true).length > 0 ? <TransactionAuthList /> : <p>You have no more transactions to authenticate</p>}
            </div>

            <Footer />

        </div>
    )
}

export default connect(mapStateToProps)(TransactionAuthentication);