import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import TransactionForm from '../components/transactionForm';
import './transaction.css'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        currentState : state,
    }
}

function Transaction (props) {
    
    return (
        <div className="mainView">
            <Header />

            <TransactionForm />

            <Footer />
            
        </div>
    )
}


export default connect(mapStateToProps)(Transaction);