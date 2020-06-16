var initialState = {
    designs: [],
    bestSellers: [],
    categories: [],
    collections: [],
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        /****************************************************/
        case "UPDATE_FETCHED_DESIGNS":
            if (!action.designs) return { ...state };
            let fetchedDesigns = [...state.designs];
            fetchedDesigns = [...action.designs];
            return { ...state, designs: fetchedDesigns };
        /****************************************************/
        case "UPDATE_FETCHED_BEST_SELLERS":
            if (!action.bestSellers) return { ...state };
            let fetchedBestSellers = [...state.bestSellers];
            fetchedBestSellers = [...action.bestSellers];
            return { ...state, bestSellers: fetchedBestSellers };
        /****************************************************/
        case "UPDATE_FETCHED_CATEGORIES":
            if (!action.categories) return { ...state };
            let fetchedCategories = [...state.categories];
            fetchedCategories = [...action.categories];
            return { ...state, categories: fetchedCategories };
        /****************************************************/
        case "UPDATE_FETCHED_COLLECTIONS":
            if (!action.collections) return { ...state };
            let fetchedCollections = [...state.collections];
            fetchedCollections = [...action.collections];
            return { ...state, collections: fetchedCollections };
        /****************************************************/
        default:
            return { ...state };
    }
};

export default homeReducer;