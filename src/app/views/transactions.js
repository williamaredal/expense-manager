import React, { useState } from 'react';
import { connect } from 'react-redux';
import store from '../store';
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
    const [transactionHistory, updateHistory] = useState([
        ...props.currentState.transactions
    ]);

    store.subscribe( () => {
        updateHistory(
            props.currentState.transactions
        )
    })
    
    return (
        <div className="mainView">

            <Header />

            <div className="transactionsOverview">
                    here is the Card displaying relevant info such as accountNumber, dueBalance, etc
            </div>
            
            <div className="transactionHistoryCard">
                <TransactionHistory transactionHistory={transactionHistory} />
            </div>

            <Footer />

        </div>
    )
}

export default connect(mapStateToProps)(Transactions);