import { createSlice } from '@reduxjs/toolkit'

export const products = createSlice({
  name: 'products',
  initialState: [{
    id: "",
    category: "",
    name: "",
    inStock: true,
    brand:"",
    gallery:[],
    attributes:[],
    discription:"",
    prices:[]
  }],
  reducers: {
    getProductsSlice:(state , action)=>{
        state = action.payload;
        return state; 
    },
    addProductSlice:(state , action)=>{
        state.push(action.payload);
        return state;
    },
    editProductSlice:(state , action)=>{
        state = state.map( i=>i.id == action.payload.id ? action.payload : i );
        return state;
    },
    deleteProductSlice:(state , action)=>{
        state = state.filter(i=>i.id !== action.payload );
        return state;
    }
  },
})

// Action creators are generated for each case reducer function
export const {getProductsSlice , addProductSlice , editProductSlice , deleteProductSlice } = products.actions

export default products.reducer