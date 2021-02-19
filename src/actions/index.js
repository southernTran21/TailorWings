/**
 * This is for Common
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
export const updateDefaultProducts = (defaultProducts) => {
    return {
        type: "UPDATE_DEFAULT_PRODUCTS",
        defaultProducts,
    };
};
export const updatePatterns = (patterns) => {
    return {
        type: "UPDATE_PATTERNS",
        patterns,
    };
};
export const updatePatternCollections = (patternCollections) => {
    return {
        type: "UPDATE_PATTERN_COLLECTIONS",
        patternCollections,
    };
};
export const updateFabricTypeList = (fabricTypeList) => {
    return {
        type: "UPDATE_FABRIC_TYPE_LIST",
        fabricTypeList,
    };
};
export const updateTopProducts = (topProducts) => {
    return {
        type: "UPDATE_TOP_PRODUCTS",
        topProducts,
    };
};
export const updatePageFixedTopStatus = (isPageFixedTop = null) => {
    return {
        type: "UPDATE_PAGE_FIXED_TOP_STATUS",
        isPageFixedTop,
    };
};

export const updateSelectedWhiteProduct = (selectedWhiteProduct) => {
    return {
        type: "UPDATE_SELECTED_WHITE_PRODUCT",
        selectedWhiteProduct,
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

export const updateLoginDisplayStatus = () => {
    return {
        type: "UPDATE_LOGIN_DISPLAY_STATUS",
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

export const updateFilterStatus = (filterStatus) => {
    return {
        type: "UPDATE_FILTER_STATUS",
        filterStatus,
    };
};

export const setListLoading = (status) => {
    return {
        type: "SET_LIST_LOADING",
        status,
    };
};

export const updateFilteredProducts = (filteredProducts) => {
    return {
        type: "UPDATE_FILTERED_PRODUCTS",
        filteredProducts,
    };
};

export const updateCurrentRenderProducts = (currentRenderProducts) => {
    return {
        type: "UPDATE_CURRENT_RENDER_PRODUCTS",
        currentRenderProducts,
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
        user,
    };
};

export const updateOrders = (orders) => {
    return {
        type: "UPDATE_ORDERS",
        orders,
    };
};

export const updateOrderDetail = (orderDetail) => {
    return {
        type: "UPDATE_ORDER_DETAIL",
        orderDetail,
    };
};

export const updateInitialImageUploadData = (patterns, products, designs) => {
    return {
        type: "UPDATE_INITIAL_IMAGE_UPLOAD_DATA",
        patterns,
        products,
        designs,
    };
};

export const updateSelectedPatternImageUpload = (newPattern) => {
    return {
        type: "UPDATE_SELECTED_PATTERN_IMAGE_UPLOAD",
        newPattern,
    };
};

export const updateSelectedProductImageUpload = (newProduct) => {
    return {
        type: "UPDATE_SELECTED_PRODUCT_IMAGE_UPLOAD",
        newProduct,
    };
};

export const updateSelectedDesignImageUpload = (newDesign) => {
    return {
        type: "UPDATE_SELECTED_DESIGN_IMAGE_UPLOAD",
        newDesign,
    };
};

export const updateImageSelectionOption = (option) => {
    return {
        type: "UPDATE_IMAGE_SELECTION_OPTION",
        option,
    };
};

export const updateImageSelectionModalStatus = () => {
    return {
        type: "UPDATE_IMAGE_SELECTION_MODAL_STATUS",
    };
};

export const updateImageRef = (imageRef) => {
    return {
        type: "UPDATE_IMAGE_REF",
        imageRef,
    };
};

export const updateAdminImageList = (newImage) => {
    return {
        type: "UPDATE_ADMIN_IMAGE_LIST",
        newImage,
    };
};
