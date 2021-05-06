import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  accountNumber : Math.floor(Math.random()*10000000000000),
  accountName : 'My Account Name',
  accountAvailableBalance : 100, // sum of authenticated transactions
  accountDueBalance : 10, // sum of transactions pending authentication

  transactions : [
    {
      transactionID : 'UNIQUEID',
      transactionAccount : 'Parent Account',
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
      balance : state.balance + action.payload}
    
    case 'expences/addTransaction' : 
    return {
      ...state,
      accountDueBalance : state.accountDueBalance + action.payload.ammount,
      transactions : [ ...state.transactions,
      {
        transactionID : 'NEWUNIQUEID',
        transactionAccount : action.payload.parentAccount,
        ammount : action.payload.ammount,
        date : new Date(),
        transactionTitle : action.payload.title,
        transactionDescription : action.payload.description,
        transactionAuthenticated : action.payload.authenticated, // is the transaction can be authenticated after being made or just submitted
      }
    ] }
    
    default : 
    return state
  }
}

const store = configureStore({
  reducer : AccountantReducer,
  initialState,
});

export default store;