import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Quantity from "components/Quantity";
import { modifyPrice } from "services/CommonFunctions";

ProductItem.propTypes = {
    product: PropTypes.object,
    onProductUpdate: PropTypes.func,
    index: PropTypes.number,
};

ProductItem.defaultProps = {
    product: null,
    onProductUpdate: null,
    index: null,
};

function ProductItem(props) {
    if (!props.product || !props.onProductUpdate) return <Fragment />;
    /*********************************
     *  Description: handle quantity changing
     *
     *
     *  Call by:
     */
    function onQuantityChange(quantity) {
        /*--------------*/
        if (!isNaN(quantity) && props.index > -1) {
            props.onProductUpdate(true, props.index, quantity, null);
        }
    }
    /************_END_****************/
    /*--------------*/
    const {
        image,
        quantity,
        name,
        price,
        size,
        bodyMetric,
        productID,
    } = props.product;
    /*--------------*/
    let modifiedPrice = quantity * price;
    modifiedPrice = modifyPrice(modifiedPrice);
    /*--------------*/
    const modifiedSize = size === "modify" ? "" : `${size} /`;
    /*--------------*/
    return (
        <div className="c-cart-product-item">
            <div className="c-cart-product-item--left">
                <div className="c-cart-product-item__image">
                    <img src={image[0]} alt={productID} />
                </div>
                <div className="c-cart-product-item__quantity">
                    <Quantity quantity={quantity} onChange={onQuantityChange} />
                </div>
            </div>
            <div className="c-cart-product-item--right">
                <span className="c-cart-product-item__name">{name}</span>
                <span className="c-cart-product-item__price">
                    {modifiedPrice} VNĐ
                </span>
                <div className="c-cart-product-item__size">
                    <span>
                        Size: {modifiedSize} {bodyMetric.chest} /{" "}
                        {bodyMetric.waist} / {bodyMetric.hip}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
