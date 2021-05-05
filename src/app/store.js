import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  accountNumber : Math.floor(Math.random()*10000000000000),
  accountName : 'My Account Name',
  accountAvailableBalance : 100, // sum of authenticated transactions
  accountDueBalance : 10, // sum of transactions pending authentication

  transactions : [
    {
      ammount : 1,
      date : 'testDate'
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
      transactions : [ ...state.transactions, { ammount : action.payload.ammount, date : action.payload.date }] }
    
    default : 
    return state
  }
}

const store = configureStore({
  reducer : AccountantReducer,
  initialState,
});

export default store;