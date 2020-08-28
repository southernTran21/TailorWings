const PHONE_LENGTH = 12;

var initialState = {
    order: {
        shippingInfo: null,
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
    shippingInfo: {
        name: {
            value: "",
            isError: true,
        },
        phone: {
            value: "",
            isError: true,
        },
        address: {
            value: "",
            isError: true,
        },
        note: {
            value: "",
            isError: false,
        },
    },
    errorStatus: new Array(3).fill(false),
    isNotValidInfo: true,
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
        default:
            return { ...state };
    }
};

export default cartReducer;
