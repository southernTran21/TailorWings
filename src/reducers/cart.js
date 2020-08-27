var initialState = {
    order: {
        customerID: null,
        doneDate: null,
        note: null,
        orderDate: null,
        detail: null,
        paymentMethod: null,
        status: "new",
        voucher: null,
        price: null,
    },
    voucher: null,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        /****************************************************/
        case "UPDATE_ORDER":
            if (!action.updatedOrder) return { ...state };
            return { ...state, order: action.updatedOrder };
        /****************************************************/
        case "UPDATE_VOUCHER":
            if (!action.voucher) return { ...state };
            /*--------------*/
            let updatedOrder = state.order
                ? {
                      ...state.order,
                      voucher: action.voucher.code || "",
                      discount: action.voucher.value || 0,
                  }
                : {
                      voucher: action.voucher.code || "",
                      discount: action.voucher.value || 0,
                  };
            return { ...state, voucher: action.voucher, order: updatedOrder };
        /****************************************************/
        default:
            return { ...state };
    }
};

export default cartReducer;
