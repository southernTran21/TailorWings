const PHONE_LENGTH = 12;

var initialState = {
    voucher: null,
    shippingInfo: null,
    isNotValidInfo: true,
    paymentMethod: 1,
    isCartDeleted: false,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
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
        case "UPDATE_SHIPPING_INFO":
            if (!action.shippingInfo) return { ...state };
            /*--------------*/
            const { name, phone, address } = action.shippingInfo;
            name.isError = name.value === "" ? true : false;
            phone.isError =
                phone.value === "" ||
                phone.value.split("")[0] !== "0" ||
                phone.value.length > PHONE_LENGTH
                    ? true
                    : false;
            address.isError = address.value === "" ? true : false;
            /*--------------*/
            let isNotValid = name.isError || phone.isError || address.isError;
            /*--------------*/
            return {
                ...state,
                shippingInfo: action.shippingInfo,
                isNotValidInfo: isNotValid,
            };
        /****************************************************/
        case "UPDATE_ERROR_STATUS":
            if (!action.errorStatus) return { ...state };
            /*--------------*/
            return { ...state, errorStatus: action.errorStatus };
        /****************************************************/
        case "UPDATE_PAYMENT_METHOD":
            if (!action.paymentMethod) return { ...state };
            /*--------------*/
            return { ...state, paymentMethod: action.paymentMethod };
        /****************************************************/
        case "DELETE_CART_PRODUCT":
            /*--------------*/
            return { ...state, isCartDeleted: !state.isCartDeleted };
        /****************************************************/
        case "RESET_CART_STATE":
            /*--------------*/
            return { ...initialState };
        /****************************************************/
        default:
            return { ...state };
    }
};

export default cartReducer;
