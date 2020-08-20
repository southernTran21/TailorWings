const LIMIT = 14;

var initialState = {
    categories: [],
    collections: [],
    designs: [],
    fabrics: [],
    defaultProducts: [],
    designers: [],
    bestSeller: [],
    filteredDesigns: [],
    renderDesigns: {
        isMax: false,
        designs: [],
    },
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
        case "UPDATE_DEFAULT_PRODUCTS":
            if (!action.defaultProducts) return { ...state };
            let fetchedDefaultProducts = [...state.defaultProducts];
            fetchedDefaultProducts = [...action.defaultProducts];

            return { ...state, defaultProducts: fetchedDefaultProducts };
        /****************************************************/
        case "MODIFY_DEFAULT_PRODUCTS":
            if (!action.info) return { ...state };
            const { designID, fabricNumber, designOwner } = action.info;
            let newDefaultProducts = [...state.defaultProducts];
            let index = newDefaultProducts.findIndex(
                (product) => product.designID === designID
            );
            if (index > -1) {
                newDefaultProducts[index].fabricNumber = fabricNumber;
                newDefaultProducts[index].designOwner = designOwner;
            }
            return { ...state, defaultProducts: newDefaultProducts };
        /****************************************************/
        case "UPDATE_DESIGNERS":
            if (!action.designers) return { ...state };
            let fetchedDesigners = [...state.designers];
            fetchedDesigners = [...action.designers];
            return { ...state, designers: fetchedDesigners };
        /****************************************************/
        case "UPDATE_BESTSELLER":
            if (!action.designs) return { ...state };
            let updatedBestSeller = [...state.bestSeller];
            action.designs.forEach((design) => {
                let info = state.defaultProducts.find(
                    (product) => product.designID === design
                );
                if (info) {
                    updatedBestSeller.push(info);
                }
            });
            return { ...state, bestSeller: updatedBestSeller };
        /****************************************************/
        case "UPDATE_FILTERED_DESIGNS":
            if (!action.filter) return { ...state };
            let updatedFilteredDesigns = [...state.filteredDesigns];
            /*--------------*/
            if (action.filter === "all") {
                updatedFilteredDesigns = [...state.defaultProducts];
            } else {
                updatedFilteredDesigns = [
                    ...(state.defaultProducts.filter((product) => {
                        return product.catID === action.filter;
                    }) || []),
                ];
            }
            return {
                ...state,
                filteredDesigns: updatedFilteredDesigns,
                renderDesigns: { isMax: false, designs: [] },
            };
        /****************************************************/
        case "UPDATE_RENDER_DESIGNS":
            let updatedRenderDesigns = { ...state.renderDesigns };
            let endIndex = action.isLoadMore
                ? updatedRenderDesigns.designs.length + LIMIT
                : LIMIT; 
            /*--------------*/
            let updatedDesigns = [...state.filteredDesigns.slice(0, endIndex)];
            let isMax =
                updatedDesigns.length >= state.filteredDesigns.length &&
                state.filteredDesigns.length > 0;
            /*--------------*/
            updatedRenderDesigns = {
                isMax: isMax,
                designs: updatedDesigns,
            };
            return { ...state, renderDesigns: updatedRenderDesigns };
        /****************************************************/
        default:
            return { ...state };
    }
};

export default commonReducer;
