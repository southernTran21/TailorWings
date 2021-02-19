import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { modifyPrice } from "services/CommonFunctions";

OrderItem.propTypes = {
    info: PropTypes.object,
};

OrderItem.defaultProps = {
    info: null,
};

function OrderItem(props) {
    if (!props.info) return <Fragment />;
    const {
        image,
        name,
        quantity,
        productID,
        size,
        bodyMetric,
        price,
    } = props.info;
    let modifiedPrice = modifyPrice(price * quantity);
    return (
        <div className="c-order-item">
            <div className="c-order-item__image">
                <img src={typeof image === "object" ? image.T : ""} alt={productID} />
            </div>
            <div className="c-order-item__content">
                <div>
                    <div className="c-order-item--top">
                        <span className="c-order-item__name">{name}</span>
                        <span className="c-order-item__quantity">
                            x{quantity}
                        </span>
                    </div>
                    <p className="c-order-item__id">{productID}</p>
                    <p className="c-order-item__id">
                        Size: {size === "modify" ? "" : `${size} | `} {bodyMetric.chest} |{" "}
                        {bodyMetric.waist} | {bodyMetric.hip}
                    </p>
                </div>
                <span className="c-order-item__price">{modifiedPrice} VNĐ</span>
            </div>
        </div>
    );
}

export default OrderItem;
