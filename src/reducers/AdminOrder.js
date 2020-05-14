var initialState = {
    orderList: [],
    renderList: [],
};

const adminOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_ORDER_LIST":
            let newOrderList = [...state.orderList];
            if (!action.orderList) return { ...state };
            newOrderList = [...action.orderList];
            return { ...state, orderList: newOrderList };
        case "UPDATE_RENDER_LIST":
            let newRenderList = [...state.renderList];
            if (!action.renderList) return { ...state };
            newRenderList = [...action.renderList];
            return { ...state, renderList: newRenderList };
        default:
            return { ...state };
    }
};

export default adminOrderReducer;
