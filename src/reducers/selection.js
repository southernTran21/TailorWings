var initialState = {
    renderProduct: null,
    renderPatterns: [],
    renderFabricTypes: [],
    relatedProducts: [],
    selectedProduct: null,
    selectedDesign: null,
    selectedFabricType: null,
    src: { pathname: "/", search: "" },
    isPageLoading: false,
    isImageLoading: false,
};

const selectionReducer = (state = initialState, action) => {
    switch (action.type) {
        /****************************************************/
        case "UPDATE_RENDER_PRODUCT":
            if (!action.renderProduct) return { ...state };
            return {
                ...state,
                renderProduct: { ...action.renderProduct },
            };
        /****************************************************/
        case "UPDATE_RENDER_PATTERNS":
            if (!action.renderPatterns) return { ...state };
            return {
                ...state,
                renderPatterns: action.renderPatterns,
            };
        /****************************************************/
        case "UPDATE_RENDER_FABRIC_TYPES":
            if (!action.renderFabricTypes) return { ...state };
            return {
                ...state,
                renderFabricTypes: action.renderFabricTypes,
            };
        /****************************************************/
        case "UPDATE_SELECTED_PRODUCT":
            if (!action.info) return { ...state };
            let selectedProduct = { ...state.selectedProduct, ...action.info };
            return { ...state, selectedProduct: selectedProduct };
        /****************************************************/
        case "UPDATE_SELECTED_DESIGN":
            if (!action.selectedDesign) return { ...state };
            return { ...state, selectedDesign: action.selectedDesign };
        /****************************************************/
        case "UPDATE_RELATED_PRODUCTS":
            if (!action.relatedProducts) return { ...state };
            return { ...state, relatedProducts: action.relatedProducts };
        /****************************************************/
        case "UPDATE_SELECTED_FABRIC_TYPE":
            if (!action.selectedFabricType) return { ...state };
            return { ...state, selectedFabricType: action.selectedFabricType };
        /****************************************************/
        case "UPDATE_SRC":
            if (!action.src) return { ...state };
            return { ...state, src: action.src };
        /****************************************************/
        case "UPDATE_PAGE_LOADING":
            if (typeof action.isPageLoading !== "boolean") return {...state};
            return { ...state, isPageLoading: action.isPageLoading };
        /****************************************************/
        case "UPDATE_IAMGE_LOADING":
            return { ...state, isImageLoading: action.isImageLoading };
        /****************************************************/
        default:
            return { ...state };
    }
};

export default selectionReducer;
