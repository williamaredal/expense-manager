import React from 'react';
import Dashboard from './app/views/dashboard';
import Register from './app/views/register';
import Login from './app/views/login';
import TransactionHistory from './app/components/transactionHistory';
import Transaction from './app/components/transaction';

import "tailwindcss/tailwind.css";


function App() {
  return (
    <div>

      <Dashboard />

    </div>
  );
}

export default App;
