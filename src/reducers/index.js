import { combineReducers } from 'redux';
import listProductOnCart from './listProductOnCart'
import updateProductOnCart from './updateProductOnCart'
const myReducer = {
    listProductOnCart: listProductOnCart,
    updateProductOnCart: updateProductOnCart
};

export default myReducer;

