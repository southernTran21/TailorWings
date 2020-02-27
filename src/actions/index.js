import * as types from './../constants/ActionTypes';

export const listCart = () => {
    return {
        type: types.LIST_PRODUCT_ON_CART,
    }
}

export const addProductToCart = (product,quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const updateCart = (updatedList) => {
    return {
        type: types.UPDATE_TO_CART,
        updatedList
    }
}

export const getDatabaseUpdate = ( collection, data ) => {
    return {
        type: types.GET_DATABASE_UPDATE,
        collection,
        data
    }
}

