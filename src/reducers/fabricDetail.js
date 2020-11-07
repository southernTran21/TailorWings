var initialState = {
    selectedPattern: null,
    fabricTypeStatus: [
        {
            id: "all",
            name: "Tất cả",
            description: "Hãy chọn chất liệu vải cho họa tiết bạn thích để tạo nên chiếc đầm hợp với bạn!",
            isActive: true,
        },
    ],
    selectedFabricType: {
        id: "all",
        name: "Tất cả",
        description: "Hãy chọn chất liệu vải cho họa tiết bạn thích để tạo nên chiếc đầm hợp với bạn!",
        isActive: true,
    },
    availableProductList: []
};

const fabricDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        /****************************************************/
        case "UPDATE_SELECTED_PATTERN":
            return { ...state, selectedPattern: action.selectedPattern };
        /****************************************************/
        case "UPDATE_FABRIC_TYPE_STATUS":
            if (!action.fabricTypeStatus) return { ...state };
            return { ...state, fabricTypeStatus: action.fabricTypeStatus };
        /****************************************************/
        case "UPDATE_SELECTED_FABRIC_TYPE":
            if (!action.selectedFabricType) return { ...state };
            return { ...state, selectedFabricType: action.selectedFabricType };
        /****************************************************/
        case "UPDATE_AVAILABLE_PRODUCT_LIST":
            if (!action.availableProductList) return { ...state };
            return { ...state, availableProductList: action.availableProductList };
        /****************************************************/
        default:
            return { ...state };
    }
};

export default fabricDetailReducer;
