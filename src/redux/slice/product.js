import { createSlice } from '@reduxjs/toolkit'

export const product = createSlice({
  name: 'product',
  initialState:{
    id: "",
    category: "",
    name: "",
    inStock: true,
    brand:"",
    gallery:[],
    attributes:[],
    discription:"",
    prices:[]
  },    
  reducers: {
    setProductSlice:(state , action)=>{
        state = action.payload;
        return state;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setProductSlice } = product.actions

export default product.reducer