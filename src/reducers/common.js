var initialState = {
    categories: [],
    collections: [],
    designs: [],
    fabrics: [],
    products: [],
    designers: [],
    bestSeller: [],
};

const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        /****************************************************/
        case "UPDATE_CATEGORIES":
            if (!action.categories) return { ...state };
            let fetchedCategories = [...state.categories];
            fetchedCategories = [...action.categories];
            return { ...state, categories: fetchedCategories };
        /****************************************************/
        case "UPDATE_COLLECTIONS":
            if (!action.collections) return { ...state };
            let fetchedCollections = [...state.collections];
            fetchedCollections = [...action.collections];
            return { ...state, collections: fetchedCollections };
        /****************************************************/
        case "UPDATE_DESIGNS":
            if (!action.designs) return { ...state };
            let fetchedDesigns = [...state.designs];
            fetchedDesigns = [...action.designs];
            return { ...state, designs: fetchedDesigns };
        /****************************************************/
        case "UPDATE_FABRICS":
            if (!action.fabrics) return { ...state };
            let fetchedFabrics = [...state.fabrics];
            fetchedFabrics = [...action.fabrics];
            return { ...state, fabrics: fetchedFabrics };
        /****************************************************/
        case "UPDATE_PRODUCTS":
            if (!action.products) return { ...state };
            let fetchedProducts = [...state.products];
            fetchedProducts = [...action.products];
            return { ...state, products: fetchedProducts };
        /****************************************************/
        case "UPDATE_DESIGNERS":
            if (!action.designers) return { ...state };
            let fetchedDesigners = [...state.designers];
            fetchedDesigners = [...action.designers];
            return { ...state, designers: fetchedDesigners };
        /****************************************************/
        case "UPDATE_BESTSELLER":
            if (!action.bestSeller) return { ...state };
            let fetchedBestSeller = [...state.bestSeller];
            fetchedBestSeller = [...action.bestSeller];
            return { ...state, bestSeller: fetchedBestSeller };
        /****************************************************/
        default:
            return { ...state };
    }
};

export default commonReducer;
