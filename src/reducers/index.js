import { combineReducers } from 'redux';
import listProductOnCart from './listProductOnCart'
import updateProductOnCart from './updateProductOnCart'
import adminOrderReducer from './AdminOrder'
import firebaseAuthReducer from './FirebaseAuth'

const myReducer = {
    listProductOnCart: listProductOnCart,
    updateProductOnCart: updateProductOnCart,
    adminOrderReducer: adminOrderReducer,
    firebaseAuthReducer: firebaseAuthReducer
};

export default myReducer;

