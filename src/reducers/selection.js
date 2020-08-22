var initialState = {
    productList: [],
    fabricList: [],
    renderProduct: null,
    renderFabrics: [],
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
            if (!action.productID) return { ...state };
            if (state.productList < 0) return { ...state };
            /*--------------*/
            const updatedRenderProduct =
                state.productList.find(
                    (product) => product.productID === action.productID
                ) || null;
            return { ...state, renderProduct: updatedRenderProduct };
        /****************************************************/
        case "UPDATE_RENDER_FABRICS":
            if (!action.designID || !action.fabricID) return { ...state };
            if (state.productList.length < 1 || state.fabricList < 1)
                return { ...state };
            /*--------------*/
            let renderFabricIDs = [];
            state.productList.forEach((product) => {
                if (product.designID === action.designID) {
                    renderFabricIDs.push(product.fabricID);
                }
            });
            let updatedRenderFabrics = [];
            if (renderFabricIDs.length > 0) {
                renderFabricIDs.forEach((fabricID) => {
                    let info = state.fabricList.find((item) => {
                        if (item.id === fabricID) {
                            return item;
                        }
                    });
                    if (info) {
                        info.isActive = info.id === action.fabricID;
                        updatedRenderFabrics.push(info);
                    }
                });
            }
            return { ...state, renderFabrics: updatedRenderFabrics };
        /****************************************************/
        default:
            return { ...state };
    }
};

export default selectionReducer;