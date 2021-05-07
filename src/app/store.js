import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  accountNumber : Math.floor(Math.random()*10000000000000),
  accountName : 'My Account Name',
  accountAvailableBalance : 100, // sum of authenticated transactions
  accountDueBalance : 10, // sum of transactions pending authentication

  transactions : [
    {
      transactionID : 'UNIQUEID',
      transactionAccount : 'Parent Account Number',
      date : new Date(),
      ammount : 1,
      transactionTitle : 'This is a test title for transaction 1',
      transactionDescription : 'This is a test description for transaction 1. thus being a little longer',
      transactionAuthenticated : false,
    },
  ],
}

function AccountantReducer ( state = initialState, action) {

  console.log(state, action)

  switch(action.type) {
    case 'expences/balance' : 
    return {
      ...state,
      balance : state.balance + action.payload
    }
    
    case 'expences/addTransaction' : 
    return {
      ...state,
      accountDueBalance : state.accountDueBalance + action.payload.ammount,
      transactions : [
        ...state.transactions,
        {
          transactionID : action.payload.transactionNumber ? action.payload.transactionNumber : Math.round(Math.random()*10000000000000),
          transactionAccount : action.payload.parentAccount,
          ammount : action.payload.ammount,
          date : action.payload.date ? action.payload.date : new Date(),
          transactionTitle : action.payload.title,
          transactionDescription : action.payload.description,
          transactionAuthenticated : action.payload.authenticated,
        },
      ]
    }
    
    case 'expences/authTransaction' : 
    return {
      ...state,
      accountAvailableBalance : state.accountAvailableBalance + action.payload.ammount,
      transactions : [
        ...state.transactions,
        {
          transactionID : action.payload.transactionNumber,
          transactionAccount : action.payload.parentAccount,
          ammount : action.payload.ammount,
          date : action.payload.date ? action.payload.date : new Date(),
          transactionTitle : action.payload.title,
          transactionDescription : action.payload.description,
          transactionAuthenticated : action.payload.authenticated,
        },
      ]
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