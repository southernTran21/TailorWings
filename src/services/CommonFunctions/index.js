/*********************************
 *  Description: format price as 000.000
 *
 *
 *  Call by: all
 */
export const modifyPrice = (price) => {
    if (!price) return "";
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};
/************_END_****************/

/*********************************
 *  Description: count total quantity of cartList
 *
 *
 *  Call by:
 */
export const countTotalQuantity = (list) => {
    let totalQuantity = list.reduce((accumulator, current) => {
        return accumulator + current.quantity;
    }, 0);
    if (totalQuantity) {
        return totalQuantity;
    } else {
        return 0;
    }
};
/************_END_****************/

/*********************************
 *  Description: count total price of a list
 *
 *
 *  Call by:
 */
export const countTotalPrice = (list) => {
    let totalPrice = list.reduce((accumulator, current) => {
        return accumulator + current.price;
    }, 0);
    if (totalPrice) {
        return totalPrice;
    } else {
        return 0;
    }
};
/************_END_****************/


/*********************************
 *  Description: calculate total price of product
 *
 *
 *  Call by: all
 */
export const productPriceCalculate = (
    designPrice,
    designLength,
    fabricPrice
    // productDiscount,
    // categoryDiscount
) => {
    if (!isNaN(designPrice) && !isNaN(designLength) && !isNaN(fabricPrice)) {
        let price = purePriceCalculate(
            designPrice,
            designLength,
            fabricPrice
        );
        return Math.ceil(price/ 1000) * 1000;
    } else {
        return 0;
    }
};

const purePriceCalculate = (
    designPrice,
    designLength,
    fabricPrice
) => {
    return designPrice + (fabricPrice * designLength) / 100 + 400000;
};
