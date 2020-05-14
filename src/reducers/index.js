import { combineReducers } from 'redux';
import listProductOnCart from './listProductOnCart'
import updateProductOnCart from './updateProductOnCart'
import adminOrderReducer from './AdminOrder'
const myReducer = {
    listProductOnCart: listProductOnCart,
    updateProductOnCart: updateProductOnCart,
    adminOrderReducer: adminOrderReducer,
};

export default myReducer;

