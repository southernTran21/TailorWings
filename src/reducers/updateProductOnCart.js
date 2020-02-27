import * as types from '../constants/ActionTypes';

var initialState = false;

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_TO_CART:
            if (Array.isArray(action.updatedList)) {
                let updatedList = [...action.updatedList];
                sessionStorage.setItem('productsOnCart', JSON.stringify(updatedList));
            }
            return !state;
        default: return state;
    }
}

export default myReducer;