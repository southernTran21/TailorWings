var initialState = {
    designNumber: []
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        /****************************************************/
        case "UPDATE_CATEGORIES_DESIGN_NUMBER":
            if (!action.designNumber) return { ...state };
            let fetchedDesignNumber = [...state.designNumber];
            fetchedDesignNumber = [...action.designNumber];
            return { ...state, designNumber: fetchedDesignNumber };
        /****************************************************/
        default:
            return { ...state };
    }
};

export default homeReducer;
