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