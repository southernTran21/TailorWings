/**
 * This is for Homepage
 */
export const updateCategories = (categories) => {
    return {
        type: "UPDATE_CATEGORIES",
        categories,
    };
};
export const updateCollections = (collections) => {
    return {
        type: "UPDATE_COLLECTIONS",
        collections,
    };
};
export const updateDesigns = (designs) => {
    return {
        type: "UPDATE_DESIGNS",
        designs,
    };
};
export const updateFabrics = (fabrics) => {
    return {
        type: "UPDATE_FABRICS",
        fabrics,
    };
};
export const updateDefaultProducts = (defaultProducts) => {
    return {
        type: "UPDATE_DEFAULT_PRODUCTS",
        defaultProducts,
    };
};
export const modifyDefaultProducts = (info) => {
    return {
        type: "MODIFY_DEFAULT_PRODUCTS",
        info,
    };
};
export const updateDesigners = (designers) => {
    return {
        type: "UPDATE_DESIGNERS",
        designers,
    };
};
export const updateBestSeller = (designs) => {
    return {
        type: "UPDATE_BESTSELLER",
        designs,
    };
};
export const updateFilteredDesigns = (filter) => {
    return {
        type: "UPDATE_FILTERED_DESIGNS",
        filter,
    };
};
export const updateRenderDesigns = (isLoadMore) => {
    return {
        type: "UPDATE_RENDER_DESIGNS",
        isLoadMore,
    };
};

/**
 * This is for Homepage
 */

export const updateCategoriesDesignNumber = (designNumber) => {
    return {
        type: "UPDATE_CATEGORIES_DESIGN_NUMBER",
        designNumber,
    };
};

/**
 * This is for Designs page
 */

export const updateCurrentFilter = (filter) => {
    return {
        type: "UPDATE_CURRENT_FILTER",
        filter,
    };
};

export const setListLoading = (status) => {
    return {
        type: "SET_LIST_LOADING",
        status,
    };
};

/**
 * This is for Selection page
 */

export const updateProductList = (products) => {
    return {
        type: "UPDATE_PRODUCT_LIST",
        products,
    };
};

export const updateFabricList = (fabrics) => {
    return {
        type: "UPDATE_FABRIC_LIST",
        fabrics,
    };
};

export const updateRenderProduct = (product) => {
    return {
        type: "UPDATE_RENDER_PRODUCT",
        product,
    };
};

export const updateRenderFabrics = (fabrics) => {
    return {
        type: "UPDATE_RENDER_FABRICS",
        fabrics,
    };
};

export const updateSelectedProduct = (info) => {
    return {
        type: "UPDATE_SELECTED_PRODUCT",
        info,
    };
};

export const updateSRC = (src) => {
    return {
        type: "UPDATE_SRC",
        src,
    };
};
/**
 * This is for Size page
 */

export const updateInputStatus = (isDefaultInput) => {
    return {
        type: "UPDATE_INPUT_STATUS",
        isDefaultInput,
    };
};

export const updateQuantity = (quantity) => {
    return {
        type: "UPDATE_QUANTITY",
        quantity,
    };
};

export const updateSize = (size) => {
    return {
        type: "UPDATE_SIZE",
        size,
    };
};

export const updateBodyMetric = (bodyMetric) => {
    return {
        type: "UPDATE_BODY_METRIC",
        bodyMetric,
    };
};

export const addToCart = (selectedProduct) => {
    return {
        type: "ADD_TO_CART",
        selectedProduct,
    };
};

export const updateCart = (updatedList) => {
    return {
        type: "UPDATE_CART",
        updatedList,
    };
};

/**
 * This is for Cart page
 */

export const updateVoucher = (voucher) => {
    return {
        type: "UPDATE_VOUCHER",
        voucher,
    };
};

export const updateShippingInfo = (shippingInfo) => {
    return {
        type: "UPDATE_SHIPPING_INFO",
        shippingInfo,
    };
};

export const updateErrorStatus = (errorStatus) => {
    return {
        type: "UPDATE_ERROR_STATUS",
        errorStatus,
    };
};

export const updatePaymentMethod = (paymentMethod) => {
    return {
        type: "UPDATE_PAYMENT_METHOD",
        paymentMethod,
    };
};

export const resetCartState = () => {
    return {
        type: "RESET_CART_STATE",
    };
};

export const deleteCartProduct = () => {
    return {
        type: "DELETE_CART_PRODUCT",
    };
};


/**
 * This is for Admin
 */

export const updateAdminStatus = (user) => {
    return {
        type: "UPDATE_ADMIN_STATUS",
        user
    };
};