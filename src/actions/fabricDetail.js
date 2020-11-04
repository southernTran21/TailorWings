export const updateSelectedPattern = (selectedPattern) => {
    return {
        type: "UPDATE_SELECTED_PATTERN",
        selectedPattern,
    };
};

export const updateFabricTypeStatus = (fabricTypeStatus) => {
    return {
        type: "UPDATE_FABRIC_TYPE_STATUS",
        fabricTypeStatus,
    };
};

export const updateSelectedFabricType = (selectedFabricType) => {
    return {
        type: "UPDATE_SELECTED_FABRIC_TYPE",
        selectedFabricType,
    };
};

export const updateAvailableProductList = (availableProductList) => {
    return {
        type: "UPDATE_AVAILABLE_PRODUCT_LIST",
        availableProductList,
    };
};

