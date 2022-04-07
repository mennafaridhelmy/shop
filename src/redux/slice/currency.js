import { createSlice } from '@reduxjs/toolkit'

export const currency = createSlice({
  name: 'currency',
  initialState: {
    all:["$","£","¥","₽"],
    current:"$"
  },
  reducers: {
    getCurrencySlice:(state , action)=>{
        state = action.payload;
        return state; 
    },
    editCurrencySlice:(state , action)=>{
        state = {...state,current:action.payload}
        console.log(state);
        return state;
    },
  },
})

// Action creators are generated for each case reducer function
export const {getCurrencySlice , editCurrencySlice} = currency.actions

export default currency.reducer