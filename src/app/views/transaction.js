import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import TransactionForm from '../components/transactionForm';
import { connect } from 'react-redux';
import './transaction.css'

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