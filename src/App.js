import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './app/views/dashboard';
import Register from './app/views/register';
import Login from './app/views/login';
import Transactions from './app/views/transactions';
import TransactionAuth from './app/views/transactionAuth';
import Transaction from './app/views/transaction';
import PrivateRoute from './app/components/privateRoute';
import FourZeroFour from './app/views/fourZeroFour'
import  './index.css'

import "tailwindcss/tailwind.css";


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      userAuthenticated : true,
    }
  }
  render () {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <PrivateRoute exact userAuthenticated={this.state.userAuthenticated} path="/" children={<Dashboard />}/>
            <PrivateRoute exact userAuthenticated={this.state.userAuthenticated} path="/transaction" children={<Transaction />}/>
            <PrivateRoute exact userAuthenticated={this.state.userAuthenticated} path="/transactionAuthentication" children={<TransactionAuth />}/>
            <PrivateRoute exact userAuthenticated={this.state.userAuthenticated} path="/transactionHistory" children={<Transactions />}/>
            <Route path="*" component={FourZeroFour} />
          </Switch>
        </BrowserRouter>

    );
  }
}

export default App;
