import { watchProductsAsync } from "./product";
import { all } from 'redux-saga/effects';

export function* rootSaga(){
    yield all([
        watchProductsAsync()
    ])
}   