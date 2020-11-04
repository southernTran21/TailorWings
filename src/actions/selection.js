/**
 * This is for Selection page
 */

export const updateRenderProduct = (renderProduct) => {
    return {
        type: "UPDATE_RENDER_PRODUCT",
        renderProduct,
    };
};

export const updateRenderPatterns = (renderPatterns) => {
    return {
        type: "UPDATE_RENDER_PATTERNS",
        renderPatterns,
    };
};

export const updateRenderFabricTypes = (renderFabricTypes) => {
    return {
        type: "UPDATE_RENDER_FABRIC_TYPES",
        renderFabricTypes,
    };
};

export const updateSelectedProduct = (info) => {
    return {
        type: "UPDATE_SELECTED_PRODUCT",
        info,
    };
};

export const updateSelectedDesign = (selectedDesign) => {
    return {
        type: "UPDATE_SELECTED_DESIGN",
        selectedDesign,
    };
};

export const updateRelatedProducts = (relatedProducts) => {
    return {
        type: "UPDATE_RELATED_PRODUCTS",
        relatedProducts,
    };
};

export const updateSelectedFabricType = (selectedFabricType) => {
    return {
        type: "UPDATE_SELECTED_FABRIC_TYPE",
        selectedFabricType,
    };
};

export const updateSRC = (src) => {
    return {
        type: "UPDATE_SRC",
        src,
    };
};

export const updatePageLoading = (isPageLoading) => {
    return {
        type: "UPDATE_PAGE_LOADING",
        isPageLoading
    };
};

export const updateImageLoading = (isImageLoading) => {
    return {
        type: "UPDATE_IMAGE_LOADING",
        isImageLoading,
    };
};