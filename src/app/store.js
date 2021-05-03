import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  balance : 0,

}

function AccountantReducer ( state = initialState, action) { // do i add payload
  console.log(state, action)

  switch(action.type) {
    case 'expences/balance' : 
    return { ...state, balance : state.balance + action.payload}

    default : 
    return state
  }
}

const store = configureStore({
  reducer : AccountantReducer,
  initialState,
});

export default store;