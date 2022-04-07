import { createProductAPI , deleteProductByIdAPI , getProductByIdAPI , getProductsAPI , updateProductAPI } from '../../apis/index'
import { setProductSlice } from '../slice/product'
import { addProductSlice , editProductSlice , deleteProductSlice , getProductsSlice } from '../slice/products'
import { CREATE_PRODUCT , GET_PRODUCTS , GET_PRODUCT_BY_ID , UPDATE_PRODUCT_BY_ID , DELETE_PRODUCT_BY_ID } from '../types/index'
import { put, takeEvery } from 'redux-saga/effects';

export function* getProductsSaga() {
    const products = yield getProductsAPI()
    yield put(getProductsSlice(products.data))
}

export function* getProductByIdSaga(action) {
    yield getProductByIdAPI(action.id)
    yield put(setProductSlice(action.id))
}
export function* createProductSaga(action) {
    yield createProductAPI(action.product)
    yield put(addProductSlice(action.product))
}

export function* updateProductSaga(action) {
    yield updateProductAPI(action.product)
    yield put(editProductSlice(action.product))
}

export function* deleteProductByIdSaga(action) {
    yield deleteProductByIdAPI(action.id)
    yield put(deleteProductSlice(action.id))
}

export function* watchProductsAsync() {
    yield takeEvery(GET_PRODUCTS, getProductsSaga)
    yield takeEvery(GET_PRODUCT_BY_ID, getProductByIdSaga)
    yield takeEvery(CREATE_PRODUCT, createProductSaga)
    yield takeEvery(UPDATE_PRODUCT_BY_ID, updateProductSaga)
    yield takeEvery(DELETE_PRODUCT_BY_ID, deleteProductByIdSaga)
}