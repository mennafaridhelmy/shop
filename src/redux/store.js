import { configureStore } from '@reduxjs/toolkit';
import { product } from './slice/product';
import { products } from './slice/products';
import sagaMiddleware from '@redux-saga/core';
import { rootSaga } from './sagas/index';
import {currency} from './slice/currency'

const saga = sagaMiddleware() ;

export const store = configureStore({
  reducer: {
    product : product.reducer,
    products : products.reducer,
    currency : currency.reducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({thunk:false}).concat(saga)
})
saga.run(rootSaga);