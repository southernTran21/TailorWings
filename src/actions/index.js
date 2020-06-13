import * as types from "./../constants/ActionTypes";

/**
 * This is for MainPage
 */
export const listCart = () => {
    return {
        type: types.LIST_PRODUCT_ON_CART,
    };
};

export const addProductToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity,
    };
};

export const updateCart = (updatedList) => {
    return {
        type: types.UPDATE_TO_CART,
        updatedList,
    };
};

export const getDatabaseUpdate = (collection, data) => {
    return {
        type: types.GET_DATABASE_UPDATE,
        collection,
        data,
    };
};
/* END */

/**
 * This is for AdminOrder
 */

export const updateOrderList = (orderList) => {
    return {
        type: "UPDATE_ORDER_LIST",
        orderList,
    };
};

export const updateRenderList = (renderList) => {
    return {
        type: "UPDATE_RENDER_LIST",
        renderList,
    };
};

export const updateCustomerList = (customerList) => {
    return {
        type: "UPDATE_CUSTOMER_LIST",
        customerList,
    };
};

export const updateOrderDetail = (orderDetail) => {
    return {
        type: "UPDATE_ORDER_DETAIL",
        orderDetail,
    };
};

/* END */

/**
 * This is for AdminOrder
 */

export const updateAdminAuth = (isAdmin) => {
    return {
        type: "UPDATE_ADMIN_AUTH",
        isAdmin,
    };
};

 /* END */
