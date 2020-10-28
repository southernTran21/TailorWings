const adminID = [
    "YWw8mBeRocdLbq9wNZcRf0kuLXA2",
    "KTFGO7trJleAnBu8lL3zT5YpMab2",
];

var initialState = {
    // this for account
    isAdmin: false,
    userInfo: {
        name: "",
        image: "",
    },
    // this for Order Page
    orders: [],
    orderDetail: [],
    // this for Image Upload Page
    designs: [],
    products: [],
    renderDesigns: [],
    renderPattern: [],
    selectedPattern: null,
    selectedProduct: null,
    option: "pattern",
    isImageSelectionModalOpen: false,
    imageRef: null,
    imageList: []
};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        /**************************ACCOUNT**************************/
        case "UPDATE_ADMIN_STATUS":
            if (!action.user) return { ...initialState };
            let isAdminLoggined = adminID.includes(action.user.uid);
            let updatedUserInfo = {
                name: action.user.displayName,
                image: action.user.photoURL,
            };
            return {
                ...state,
                isAdmin: isAdminLoggined,
                userInfo: updatedUserInfo,
            };
        /**************************ORDER PAGE**************************/
        case "UPDATE_ORDERS":
            if (!action.orders) return { ...initialState };
            return { ...state, orders: [...action.orders] };
        /****************************************************/
        case "UPDATE_ORDER_DETAIL":
            if (!action.orderDetail) return { ...initialState };
            let updatedOrderDetail = [...state.orderDetail];
            updatedOrderDetail.push(action.orderDetail);
            return { ...state, orderDetail: [...updatedOrderDetail] };
        /**************************IMAGE PAGE**************************/
        case "UPDATE_INITIAL_IMAGE_UPLOAD_DATA":
            if (!action.patterns || !action.products)
                return { ...initialState };
            return {
                ...state,
                patterns: [...action.patterns],
                selectedPattern: {...action.patterns[0]},
                products: [...action.products],
                selectedProduct: {...action.products[0]},
            };
        /****************************************************/
        case "UPDATE_SELECTED_PATTERN_IMAGE_UPLOAD":
            if (!action.newPattern) return { ...initialState };
            return { ...state, selectedPattern: { ...action.newPattern } };
        /****************************************************/
        case "UPDATE_SELECTED_PRODUCT_IMAGE_UPLOAD":
            if (!action.newProduct) return { ...initialState };
            return { ...state, selectedProduct: { ...action.newProduct } };
        /****************************************************/
        case "UPDATE_IMAGE_SELECTION_OPTION":
            return {
                ...state,
                option: action.option,
            };
        /****************************************************/
        case "UPDATE_IMAGE_SELECTION_MODAL_STATUS":
            return {
                ...state,
                isImageSelectionModalOpen: !state.isImageSelectionModalOpen,
            };
        /****************************************************/
        case "UPDATE_IMAGE_REF":
            return {
                ...state,
                imageRef: action.imageRef,
            };
        /****************************************************/
        case "UPDATE_ADMIN_IMAGE_LIST":
            return {
                ...state,
                imageList: action.newImage,
            };
        /****************************************************/
        default:
            return { ...state };
    }
};

export default adminReducer;
