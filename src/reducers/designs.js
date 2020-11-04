var initialState = {
    currentFilter: "",
    isListLoading: false,
    filteredProducts: [],
    currentRenderProducts: {
        isMax: false,
        products: [],
    },
    filterStatus: []
};

const designsReducer = (state = initialState, action) => {
    switch (action.type) {
        /****************************************************/
        case "UPDATE_CURRENT_FILTER":
            if (!action.filter) return { ...state };
            return { ...state, currentFilter: action.filter };
        /****************************************************/
        case "UPDATE_FILTER_STATUS":
            if (!action.filterStatus) return { ...state };
            return { ...state, filterStatus: action.filterStatus };
        /****************************************************/
        case "SET_LIST_LOADING":
            return { ...state, isListLoading: action.status };
        /****************************************************/
        case "UPDATE_FILTERED_PRODUCTS":
            if (!action.filteredProducts) return { ...state };
            return {
                ...state,
                filteredProducts: [
                    ...action.filteredProducts,
                    ...action.filteredProducts,
                    ...action.filteredProducts,
                    ...action.filteredProducts,
                    ...action.filteredProducts,
                    ...action.filteredProducts,
                    ...action.filteredProducts
                ],
            };
        /****************************************************/
        case "UPDATE_CURRENT_RENDER_PRODUCTS":
            if (!action.currentRenderProducts) return { ...state };
            return {
                ...state,
                currentRenderProducts: action.currentRenderProducts,
            };
        /****************************************************/
        // case "UPDATE_RENDER_DESIGNS":
        //     let updatedRenderDesigns = { ...state.renderDesigns };
        //     let endIndex = action.isLoadMore
        //         ? updatedRenderDesigns.designs.length + LIMIT
        //         : LIMIT;
        //     /*--------------*/
        //     let updatedDesigns = [...state.filteredDesigns.slice(0, endIndex)];
        //     let isMax =
        //         updatedDesigns.length >= state.filteredDesigns.length &&
        //         state.filteredDesigns.length > 0;
        //     /*--------------*/
        //     updatedRenderDesigns = {
        //         isMax: isMax,
        //         designs: updatedDesigns,
        //     };
        //     return { ...state, renderDesigns: updatedRenderDesigns };
        /****************************************************/
        default:
            return { ...state };
    }
};

export default designsReducer;
