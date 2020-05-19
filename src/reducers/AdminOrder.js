var initialState = {
    orderList: [],
    renderList: [],
    customerList: [],
    orderDetail: {},
};

const adminOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        /****************************************************/
        case "UPDATE_ORDER_LIST":
            if (!action.orderList) return { ...state };
            let newOrderList = [...state.orderList];
            newOrderList = [...action.orderList];
            return { ...state, orderList: newOrderList };
        /****************************************************/
        case "UPDATE_RENDER_LIST":
            if (!action.renderList) return { ...state };
            let newRenderList = [...state.renderList];
            newRenderList = [...action.renderList];
            return { ...state, renderList: newRenderList };
        /****************************************************/
        case "UPDATE_CUSTOMER_LIST":
            if (!action.customerList) return { ...state };
            let newCustomerList = [...state.customerList];
            newCustomerList = [...action.customerList];
            return { ...state, customerList: newCustomerList };
        /****************************************************/
        case "UPDATE_ORDER_DETAIL":
            if (!action.orderDetail) return { ...state };
            /* get new OrderDetail */
            let newOrderDetail = { ...state.orderDetail };
            newOrderDetail = { ...action.orderDetail };
            return { ...state, orderDetail: newOrderDetail };
        /****************************************************/
        default:
            return { ...state };
    }
};

export default adminOrderReducer;
