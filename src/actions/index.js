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

/**
 * This is for Homepage
 */

export const updateFetchedDesigns = (designs) => {
    return {
        type: "UPDATE_FETCHED_DESIGNS",
        designs,
    };
};

export const updateFetchedBestSellers = (bestSellers) => {
    return {
        type: "UPDATE_FETCHED_BEST_SELLERS",
        bestSellers,
    };
};

export const updateFetchedCategories = (categories) => {
    return {
        type: "UPDATE_FETCHED_CATEGORIES",
        categories,
    };
};

export const updateFetchedCollections = (collections) => {
    return {
        type: "UPDATE_FETCHED_COLLECTIONS",
        collections,
    };
};

/* END */

/**
 * This is for Shopping Store
 */

export const updateFetchedProducts = (products, isFull) => {
    return {
        type: "UPDATE_FETCHED_PRODUCTS",
        products,
        isFull
    };
};

export const updateActiveFilter = (filter) => {
    return {
        type: "UPDATE_ACTIVE_FILTER",
        filter,
    };
};

export const updateActiveFilterType = (filterType) => {
    return {
        type: "UPDATE_ACTIVE_FILTER_TYPE",
        filterType,
    };
};

/* END */
