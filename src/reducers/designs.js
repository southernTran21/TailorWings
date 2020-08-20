import commonReducer from "./common";

var initialState = {
    currentFilter: "",
    isListLoading: false
};

const designsReducer = (state = initialState, action) => {
    switch (action.type) {
        /****************************************************/
        case "UPDATE_CURRENT_FILTER":
            if (!action.filter) return { ...state };
            return { ...state, currentFilter: action.filter };
        /****************************************************/
        case "SET_LIST_LOADING":
            return { ...state, isListLoading: action.status };
        /****************************************************/
        default:
            return { ...state };
    }
};

export default designsReducer;
