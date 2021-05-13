import React, { useState } from 'react';
import { connect } from 'react-redux';
import Footer from '../components/footer';
import Header from '../components/header';
import TransactionAuthList from '../components/transactionAuthList';
import './transactionAuth.css'


const mapStateToProps = (state) => {
    return{
        currentState : state,
    }
}


function TransactionAuthentication (props) {

    return (
        <div className="mainView">

            <Header />

            <div className="transactionsOverviewCard">
                <p className="titleUnderline"><b>Authenticate Transactions of Account {props.currentState.accountNumber}</b></p>
            </div>

            <div className="transactionHistoryCard">
                <TransactionAuthList />
            </div>

            <Footer />
        </div>
    )
}

export default connect(mapStateToProps)(TransactionAuthentication);