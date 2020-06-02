import moment from "moment";

/*********************************
 *  Description: convert vietnamese to english
 *  Format: aa-bb-cc
 *
 *  Call by: all
 */
export const removePunctuation = (str) => {
    // remove accents
    var from =
            "àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñç",
        to =
            "aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouunc";
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(RegExp(from[i], "gi"), to[i]);
    }

    str = str
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\-]/g, "-")
        .replace(/-+/g, "-");

    return str;
};
/************_END_****************/

/*********************************
 *  Description: validate email with expression
 *
 *
 *  Call by: all
 */
export const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
/************_END_****************/

/*********************************
 *  Description: calculate total price of product
 *
 *
 *  Call by: all
 */
export const totalPriceCalculation = (
    designPrice,
    designLength,
    fabricPrice
    // productDiscount,
    // categoryDiscount
) => {
    if (!isNaN(designPrice) && !isNaN(designLength) && !isNaN(fabricPrice)) {
        let price = purePriceCalculationHandling(
            designPrice,
            designLength,
            fabricPrice
        );
        return price;
    } else {
        return 0;
    }
};

const purePriceCalculationHandling = (
    designPrice,
    designLength,
    fabricPrice
) => {
    return designPrice + (fabricPrice * designLength) / 100 + 400000;
};

const priceAfterDiscounted = (purePrice, productDiscount, categoryDiscount) => {
    let discountPrice = purePrice;
    if (productDiscount > 0) {
        discountPrice = purePrice - productDiscount * 1000;
    } else if (categoryDiscount > 0) {
        discountPrice = purePrice - categoryDiscount * 1000;
    } else {
        // do nothing
    }
    discountPrice = discountPrice / 1000;
    discountPrice = Math.ceil(discountPrice) * 1000;
    return discountPrice;
};
/************_END_****************/

/*********************************
 *  Description: convert seconds in time to new format
 *  Format: dd/mm/yy hh:mm:ss
 *
 *  Call by: all
 */
export const timeConverter = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);

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
        year +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second;
    return time;
};
/************_END_****************/

/*********************************
 *  Description: format price as 000.000đ
 *
 *
 *  Call by: all
 */
export const modifyPrice = (price) => {
    if (!price) return "";
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + "đ";
};
/************_END_****************/

/*********************************
 *  Description: modify phone to be +84 XXX XXX XXX
 *
 *
 *  Call by: all
 */
export function modifyPhone(phone) {
    if (phone) {
        let modifiedPhone = phone.substr(1);
        modifiedPhone = modifiedPhone.replace(/(.{3})/gi, "$1 ");
        modifiedPhone = `+84 ${modifiedPhone}`;
        return modifiedPhone;
    } else {
        return phone;
    }
}
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
