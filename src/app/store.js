import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  balance : 0,
  transactions : [
    {
      ammount : 1,
      date : 'testDate'
    },
  ],
}

function AccountantReducer ( state = initialState, action) {

  switch(action.type) {
    case 'expences/balance' : 
    return { ...state, balance : state.balance + action.payload}
    
    case 'expences/addTransaction' : 
    return { ...state, balance : state.balance + action.payload.ammount, transactions : [ ...state.transactions, { ammount : action.payload.ammount, date : action.payload.date }] }
    
    default : 
    return state
  }
}

const store = configureStore({
  reducer : AccountantReducer,
  initialState,
});

export default store;