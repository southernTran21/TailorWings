import SIZE_MODIFY from "../assets/Image/size-modify.png";
import SIZE_XS from "../assets/Image/size-xs.png";
import SIZE_S from "../assets/Image/size-s.png";
import SIZE_M from "../assets/Image/size-m.png";
import SIZE_L from "../assets/Image/size-l.png";
import SIZE_XL from "../assets/Image/size-xl.png";
import SIZE_XXL from "../assets/Image/size-xxl.png";

const SIZE = [
    {
        id: "modify",
        image: SIZE_MODIFY,
        value: null,
    },
    {
        id: "XS",
        image: SIZE_XS,
        value: [79, 62, 84],
    },
    {
        id: "S",
        image: SIZE_S,
        value: {
            chest: 83,
            waist: 66,
            hip: 88,
        },
    },
    {
        id: "M",
        image: SIZE_M,
        value: {
            chest: 87,
            waist: 70,
            hip: 92,
        },
    },
    {
        id: "L",
        image: SIZE_L,
        value: {
            chest: 93,
            waist: 76,
            hip: 98,
        },
    },
    {
        id: "XL",
        image: SIZE_XL,
        value: {
            chest: 99,
            waist: 82,
            hip: 104,
        },
    },
    {
        id: "XXL",
        image: SIZE_XXL,
        value: {
            chest: 105,
            waist: 88,
            hip: 110,
        },
    },
];

var initialState = {
    isDefaultInput: true,
    quantity: 1,
    size: {
        id: "modify",
        image: SIZE_MODIFY,
        value: null,
    },
    bodyMetric: {
        chest: 0,
        waist: 0,
        hip: 0,
    },
    addNewFlag: false,
    cartUpdateFlag: false,
    cartDeleteFlag: false,
};

const sizeReducer = (state = initialState, action) => {
    switch (action.type) {
        /****************************************************/
        case "UPDATE_INPUT_STATUS":
            let newSize = action.isDefaultInput
                ? state.size
                : { id: "modify", image: SIZE_MODIFY };
            let newBodyMetric = action.isDefaultInput
                ? { chest: 0, waist: 0, hip: 0 }
                : { ...state.bodyMetric };
            /*--------------*/
            return {
                ...state,
                isDefaultInput: action.isDefaultInput,
                size: newSize,
                bodyMetric: newBodyMetric,
            };
        /****************************************************/
        case "UPDATE_QUANTITY":
            if (!action.quantity || isNaN(action.quantity)) return { ...state };
            return { ...state, quantity: action.quantity };
        /****************************************************/
        case "UPDATE_SIZE":
            if (!action.size) return { ...state };
            let updatedSize = SIZE.find((size) => size.id === action.size) || {
                id: "modify",
                image: SIZE_MODIFY,
            };
            return { ...state, size: updatedSize };
        /****************************************************/
        case "UPDATE_BODY_METRIC":
            if (!action.bodyMetric) return { ...state };
            return { ...state, bodyMetric: action.bodyMetric };
        /****************************************************/
        case "ADD_TO_CART":
            if (!action.selectedProduct) return { ...state };
            /*--------------*/
            const bodyMetric = state.size.value
                ? { ...state.size.value }
                : { ...state.bodyMetric };
            let addedProduct = {
                ...action.selectedProduct,
                quantity: state.quantity,
                size: state.size.id,
                bodyMetric: { ...bodyMetric },
            };
            /*--------------*/
            let newCart = JSON.parse(window.localStorage.getItem("cart"));
            newCart = newCart
                ? newCart.concat(addedProduct)
                : new Array(1).fill(addedProduct);
            window.localStorage.setItem("cart", JSON.stringify(newCart));
            return { ...state, addNewFlag: !state.addNewFlag };
        /****************************************************/
        case "UPDATE_CART":
            if (!action.updatedList) return { ...state };
            /*--------------*/
            window.localStorage.setItem("cart", JSON.stringify(action.updatedList));
            /*--------------*/
            return { ...state, cartUpdateFlag: !state.cartUpdateFlag };
        /****************************************************/
        default:
            return { ...state };
    }
};

export default sizeReducer;
