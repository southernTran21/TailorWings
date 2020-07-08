var initialState = {
    products: [],
    isFull: false,
    activeFilter: null,
    activeFilterType: null,
};

const shoppingStoreReducer = (state = initialState, action) => {
    switch (action.type) {
        /****************************************************/
        case "UPDATE_FETCHED_PRODUCTS":
            if (!action.products) return { ...state };
            let fetchedProducts = [...state.products];
            fetchedProducts = [...action.products];
            const isFull = action.isFull;
            return { ...state, products: fetchedProducts, isFull: isFull };
        /****************************************************/
        case "UPDATE_ACTIVE_FILTER":
            if (!action.filter) return { ...state };
            const activeFilter = action.filter;
            return { ...state, activeFilter: activeFilter };
        /****************************************************/
        case "UPDATE_ACTIVE_FILTER_TYPE":
            if (!action.filterType) return { ...state };
            const activeFilterType = action.filterType;
            return { ...state, activeFilterType: activeFilterType };
        /****************************************************/
        default:
            return { ...state };
    }
};

export default shoppingStoreReducer;
