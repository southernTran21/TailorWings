import { updateCurrentFilter } from "actions";

var initialState = {
    productList: [],
    fabricList: [],
    renderProduct: null,
    renderFabrics: [],
    selectedProduct: null,
};

const selectionReducer = (state = initialState, action) => {
    switch (action.type) {
        /****************************************************/
        case "UPDATE_PRODUCT_LIST":
            if (!action.products) return { ...state };
            let updatedProductList = [...state.productList, ...action.products];
            return { ...state, productList: updatedProductList };
        /****************************************************/
        case "UPDATE_FABRIC_LIST":
            if (!action.fabrics) return { ...state };
            let updatedFabricList = [...state.fabricList, ...action.fabrics];
            return { ...state, fabricList: updatedFabricList };
        /****************************************************/
        case "UPDATE_RENDER_PRODUCT":
            if (!action.product) return { ...state };
            /*--------------*/
            let currentImage = [...action.product.image];
            let fabricImage = state.renderFabrics.find(
                (fabric) => fabric.isActive
            );
            fabricImage = fabricImage ? fabricImage.image[0] : "";
            /*--------------*/
            currentImage.push(fabricImage);
            /*--------------*/

            return {
                ...state,
                renderProduct: { ...action.product, image: currentImage },
            };
        /****************************************************/
        case "UPDATE_RENDER_FABRICS":
            if (!action.fabrics) return { ...state };
            return {
                ...state,
                renderFabrics: action.fabrics,
            };
        /****************************************************/
        case "UPDATE_SELECTED_PRODUCT":
            if (!action.info) return { ...state };
            let selectedProduct = { ...state.selectedProduct, ...action.info };
            return { ...state, selectedProduct: selectedProduct };
        /****************************************************/
        default:
            return { ...state };
    }
};

export default selectionReducer;
