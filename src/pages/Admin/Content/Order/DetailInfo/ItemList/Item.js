import React from "react";
import PropTypes from "prop-types";
import {
    modifyPrice,
    removePunctuation,
} from "../../../../../../services/CommonFunction";

Item.propTypes = {
    order: PropTypes.object,
};

Item.defaultProps = {
    order: null,
};

function Item(props) {
    if (!props.order) return "";

    const {
        name,
        size,
        bodyMetric,
        discount,
        price,
        quantity,
        productID,
        image,
    } = props.order;
    let modifiedPrice = modifyPrice(price);
    return (
        <div className="admin-order-detail__item-list__content-wrapper d-flex align-items-center">
            <div className="admin-order-detail__item-list__content-wrapper__image">
                <img
                    src={image ? image[0] : '' }
                    alt={removePunctuation(name.toLowerCase())}
                />
            </div>
            <div className="admin-order-detail__item-list__content-wrapper__content">
                <span className="admin-order-detail__item-list__content-wrapper__content--text1 font-weight-bold">
                    {name}
                </span>
                <div className="d-flex justify-content-between">
                    <span className="admin-order-detail__item-list__content-wrapper__content--text2 font-weight-bold">
                        {`Size ${size} (${bodyMetric[0]}, ${bodyMetric[1]}, ${bodyMetric[2]})`}
                    </span>
                    <span className="admin-order-detail__item-list__content-wrapper__content--text3 font-italic">
                        {`Discount -${discount || "0đ"}`}
                    </span>
                </div>
                <span className="admin-order-detail__item-list__content-wrapper__content--text4 d-flex justify-content-end font-weight-bold">
                    {`${modifiedPrice} x ${quantity}`}
                </span>
                <span className="admin-order-detail__item-list__content-wrapper__content--text5">
                    {productID}
                </span>
            </div>
        </div>
    );
}

export default Item;
