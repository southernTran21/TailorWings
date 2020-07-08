import { combineReducers } from 'redux';
import listProductOnCart from './listProductOnCart'
import updateProductOnCart from './updateProductOnCart'
import adminOrderReducer from './AdminOrder'
import firebaseAuthReducer from './FirebaseAuth'
import homeReducer from './Homepage';
import shoppingStoreReducer from './ShoppingStore';

const myReducer = {
    listProductOnCart: listProductOnCart,
    updateProductOnCart: updateProductOnCart,
    adminOrderReducer: adminOrderReducer,
    firebaseAuthReducer: firebaseAuthReducer,
    homeReducer: homeReducer,
    shoppingStoreReducer: shoppingStoreReducer
};

export default myReducer;

