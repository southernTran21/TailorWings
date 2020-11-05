var initialState = {
    currentFilter: "",
    isListLoading: false,
    filteredPatterns: [],
    renderFilteredPatterns: {
        isMax: false,
        patterns: [],
    },
    filterStatus: [],
};

const fabricsReducer = (state = initialState, action) => {
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
        case "UPDATE_FILTERED_PATTERNS":
            if (!action.filteredPatterns) return { ...state };
            return {
                ...state,
                filteredPatterns: [
                    ...action.filteredPatterns,
                ],
            };
        /****************************************************/
        case "UPDATE_RENDER_FILTERED_PATTERNS":
            if (!action.renderFilteredPatterns) return { ...state };
            console.log('action.renderFilteredPatterns :>> ', action.renderFilteredPatterns);
            return {
                ...state,
                renderFilteredPatterns: action.renderFilteredPatterns,
            };
        /****************************************************/
        default:
            return { ...state };
    }
};

export default fabricsReducer;
