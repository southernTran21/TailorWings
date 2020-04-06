import * as types from "../constants/ActionTypes";

var initialState = false;

var duplicateDetectHandling = (addedProduct, productsOnCart) => {
    let duplicatedID = productsOnCart.findIndex((product) => {
        return (
            JSON.stringify({
                id: addedProduct.productID,
                size: addedProduct.size,
                bodyMetric: addedProduct.bodyMetric,
            }) ===
            JSON.stringify({
                id: product.productID,
                size: product.size,
                bodyMetric: product.bodyMetric,
            })
        );
    });
    return duplicatedID;
};

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_PRODUCT_ON_CART:
            return state;
        case types.ADD_TO_CART:
            console.log("action", action);
            let addedProduct = action.product;
            let productsOnCart =
                JSON.parse(sessionStorage.getItem("productsOnCart")) || [];
            let duplicatedID = duplicateDetectHandling(
                addedProduct,
                productsOnCart
            );
            if (duplicatedID > -1) {
                productsOnCart[duplicatedID].quantity += Number(
                    action.quantity
                );
            } else {
                addedProduct.quantity = Number(action.quantity);
                productsOnCart.push(addedProduct);
            }
            sessionStorage.setItem(
                "productsOnCart",
                JSON.stringify(productsOnCart)
            );
            return !state;
        default:
            return state;
    }
};

export default myReducer;
