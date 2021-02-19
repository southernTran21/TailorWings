var initialState = {
    categories: [],
    collections: [],
    defaultProducts: [],
    patterns: [],
    patternCollections: [],
    fabricTypeList: [],
    topProducts: [],
    isPageFixedTop: false,
    selectedWhiteProduct: null,
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
        case "UPDATE_DEFAULT_PRODUCTS":
            if (!action.defaultProducts) return { ...state };
            let fetchedDefaultProducts = [...state.defaultProducts];
            fetchedDefaultProducts = [...action.defaultProducts];

            return { ...state, defaultProducts: fetchedDefaultProducts };
        /****************************************************/
        case "UPDATE_PATTERNS":
            if (!action.patterns) return { ...state };
            return { ...state, patterns: action.patterns };
        /****************************************************/
        case "UPDATE_PATTERN_COLLECTIONS":
            if (!action.patternCollections) return { ...state };
            return { ...state, patternCollections: action.patternCollections };
        /****************************************************/
        case "UPDATE_FABRIC_TYPE_LIST":
            if (!action.fabricTypeList) return { ...state };
            return { ...state, fabricTypeList: action.fabricTypeList };
        /****************************************************/
        case "UPDATE_TOP_PRODUCTS":
            if (!action.topProducts) return { ...state };
            return { ...state, topProducts: [...action.topProducts] };
        /****************************************************/
        case "UPDATE_PAGE_FIXED_TOP_STATUS":
            if (action.isPageFixedTop === null) {
                return { ...state, isPageFixedTop: !state.isPageFixedTop };
            } else {
                return { ...state, isPageFixedTop: action.isPageFixedTop };
            }
        /****************************************************/
        case "UPDATE_SELECTED_WHITE_PRODUCT":
            if (!action.selectedWhiteProduct) return { ...state };
            return {
                ...state,
                selectedWhiteProduct: action.selectedWhiteProduct,
            };
        /****************************************************/
        default:
            return { ...state };
    }
};

export default commonReducer;
