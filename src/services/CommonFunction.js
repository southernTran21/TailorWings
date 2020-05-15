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

export const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

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
    if (Number(month) < 10) {
        month = "0" + month;
    }
    if (Number(date) < 10) {
        date = "0" + date;
    }
    var time = date + "/" + month + "/" + year;
    return time;
};

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
