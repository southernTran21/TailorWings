import moment from "moment";

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

/*********************************
 *  Description: convert seconds in time to new format
 *  Format: dd/mm/yy hh:mm:ss
 *
 *  Call by: all
 */
export const timeConverter = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp.seconds * 1000);

    var months = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var minute = a.getMinutes();
    var second = a.getSeconds();
    if (Number(month) < 10) {
        month = "0" + month;
    }
    if (Number(date) < 10) {
        date = "0" + date;
    }
    if (Number(hour) < 10) {
        hour = "0" + hour;
    }
    if (Number(minute) < 10) {
        minute = "0" + minute;
    }
    if (Number(second) < 10) {
        second = "0" + second;
    }
    var time =
        date +
        "/" +
        month +
        "/" +
        year
        // +
        // " " +
        // hour +
        // ":" +
        // minute +
        // ":" +
        // second;
    return time;
};
/************_END_****************/

/*********************************
 *  Description:
 *
 *
 *  Call by:
 */
export function getCurrentDate(separator = "") {
    let time = moment()._d;
    let date = time.getDate();
    let month = time.getMonth() + 1;
    let year = time.getFullYear();

    return `${year}${separator}${
        month < 10 ? `0${month}` : `${month}`
    }${separator}${date < 10 ? `0${date}` : `${date}`}`;
}
/************_END_****************/