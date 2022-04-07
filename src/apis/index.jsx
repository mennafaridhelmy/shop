import axios from 'axios';

// db.js
axios.defaults.baseURL= 'http://localhost:4000';

// C
export const createProductAPI = async (product) => axios.post(`/products` , product);

// R
export const getProductsAPI = async() => axios.get(`/products`);

export const getProductByIdAPI = async(id) => axios.get(`/products/${id}`);

// U
export const updateProductAPI = async (product) => axios.put(`/products/${product.id}` , product);

// D
export const deleteProductByIdAPI = async (id) => axios.delete(`/products/${id}`);