import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import TransactionForm from '../components/transactionForm';
import './transaction.css'


export default function Transaction (props) {
    

    return (
        <div className="mainView">
            <Header />

            <TransactionForm />

            <Footer />
            
        </div>
    )
}