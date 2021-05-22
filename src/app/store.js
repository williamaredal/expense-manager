import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  accountNumber : Math.floor(Math.random()*10000000000000),
  accountName : 'My Account Name',
  accountAvailableBalance : 350, // sum of authenticated transactions
  accountDueBalance : 30, // sum of transactions pending authentication

  currentTransaction : {

  },

  transactions : [
    {
      transactionID : 6528960483236,
      transactionAccount : 'Parent Account Number',
      date : new Date().toString(),
      amount : 10,
      transactionTitle : 'This is a test title for transaction 1',
      transactionDescription : 'This is a test description for transaction 1. thus being a little longer',
      transactionAuthenticated : false,
    },
    {
      transactionID : 'UNIQUEID',
      transactionAccount : 'Parent Account Number',
      date : new Date().toString(),
      amount : 100,
      transactionTitle : 'This is a test title for transaction 2',
      transactionDescription : 'This is a test description for transaction 2. thus being a little longer',
      transactionAuthenticated : true,
    },
    {
      transactionID : 2008960483236,
      transactionAccount : 'Parent Account Number',
      date : new Date().toString(),
      amount : 20,
      transactionTitle : 'This is a test title for transaction 3',
      transactionDescription : 'This is a test description for transaction 3. thus being a little longer',
      transactionAuthenticated : false,
    },
    {
      transactionID : 'SECONDUNIQUEID',
      transactionAccount : 'Parent Account Number',
      date : new Date().toString(),
      amount : 150,
      transactionTitle : 'This is a test title for transaction 4',
      transactionDescription : 'This is a test description for transaction 4. thus being a little longer',
      transactionAuthenticated : true,
    },
  ],
}

function AccountantReducer ( state = initialState, action) {

  switch(action.type) {
    
    case 'expences/submitTransaction' : 
    return {
      ...state,
      accountDueBalance : state.accountDueBalance - (state.currentTransaction.amount || 0)+ action.payload.amount,
      transactions : [
        ...(action.payload.newTransactions || state.transactions),
        {
          transactionID : action.payload.transactionNumber ? action.payload.transactionNumber : Math.round(Math.random()*10000000000000),
          transactionAccount : action.payload.parentAccount,
          amount : action.payload.amount,
          date : action.payload.date ? action.payload.date : new Date().toString(),
          transactionTitle : action.payload.title,
          transactionDescription : action.payload.description,
          transactionAuthenticated : action.payload.authenticated,
        },
      ]
    }

    case 'expences/authTransaction' : 
    return {
      ...state,
      accountAvailableBalance : state.accountAvailableBalance - (state.currentTransaction.amount || 0) + action.payload.amount,
      accountDueBalance : state.accountDueBalance - (state.currentTransaction.amount || 0) - action.payload.amount,
      transactions : [
        ...(action.payload.newTransactions || state.transactions),
        {
          transactionID : action.payload.transactionNumber,
          transactionAccount : action.payload.parentAccount,
          amount : action.payload.amount,
          date : action.payload.date.toString ? action.payload.date : new Date().toString(),
          transactionTitle : action.payload.title,
          transactionDescription : action.payload.description,
          transactionAuthenticated : action.payload.authenticated,
        },
      ]
    }

    case 'expences/passTransaction' :
      return {
        ...state,
        currentTransaction : {
          transactionID : action.payload.transactionNumber,
          transactionAccount : action.payload.parentAccount,
          amount : action.payload.amount,
          date : action.payload.date,
          transactionTitle : action.payload.title,
          transactionDescription : action.payload.description,
          transactionAuthenticated : action.payload.authenticated,
        }
      }
    
    default : 
    return state
  }
}

const store = configureStore({
  reducer : AccountantReducer,
  initialState,
});

export default store;