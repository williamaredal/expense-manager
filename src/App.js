import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './app/views/dashboard';
import Register from './app/views/register';
import Login from './app/views/login';
import Transactions from './app/views/transactions';
import TransactionAuth from './app/views/transactionAuth';
import Transaction from './app/views/transaction';
import  './index.css'

import "tailwindcss/tailwind.css";


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
}
  render () {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/transaction" component={Transaction}/>
            <Route exact path="/transactionAuthentication" component={TransactionAuth}/>
            <Route exact path="/transactionHistory" component={Transactions}/>
          </Switch>
        </BrowserRouter>

    );
  }
}

export default App;
