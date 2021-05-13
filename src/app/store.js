import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  accountNumber : Math.floor(Math.random()*10000000000000),
  accountName : 'My Account Name',
  accountAvailableBalance : 100, // sum of authenticated transactions
  accountDueBalance : 10, // sum of transactions pending authentication

  currentTransaction : {

  },

  transactions : [
    {
      transactionID : 6528960483236,
      transactionAccount : 'Parent Account Number',
      date : new Date(),
      ammount : 10,
      transactionTitle : 'This is a test title for transaction 1',
      transactionDescription : 'This is a test description for transaction 1. thus being a little longer',
      transactionAuthenticated : false,
    },
    {
      transactionID : 'UNIQUEID',
      transactionAccount : 'Parent Account Number',
      date : new Date(),
      ammount : 100,
      transactionTitle : 'This is a test title for transaction 2',
      transactionDescription : 'This is a test description for transaction 2. thus being a little longer',
      transactionAuthenticated : true,
    },
    {
      transactionID : 2008960483236,
      transactionAccount : 'Parent Account Number',
      date : new Date(),
      ammount : 20,
      transactionTitle : 'This is a test title for transaction 3',
      transactionDescription : 'This is a test description for transaction 3. thus being a little longer',
      transactionAuthenticated : false,
    },
    {
      transactionID : 'SECONDUNIQUEID',
      transactionAccount : 'Parent Account Number',
      date : new Date(),
      ammount : 150,
      transactionTitle : 'This is a test title for transaction 4',
      transactionDescription : 'This is a test description for transaction 4. thus being a little longer',
      transactionAuthenticated : true,
    },
  ],
}

function AccountantReducer ( state = initialState, action) {

  console.log(action.type, action.payload, state.transactions)

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
        ...action.payload.newTransactions,
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

    case 'expences/passTransaction' :
      return {
        ...state,
        currentTransaction : {
          transactionID : action.payload.transactionNumber,
          transactionAccount : action.payload.parentAccount,
          ammount : action.payload.ammount,
          date : action.payload.date.toString(),
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