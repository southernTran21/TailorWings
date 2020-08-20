import React from "react";
import PropTypes from "prop-types";

OrderItem.propTypes = {};

function OrderItem(props) {
    return (
        <div className="c-order-item">
            <div className="c-order-item__image">
                <img src="" alt="" />
            </div>
            <div className="c-order-item__content">
                <div>
                    <div className="c-order-item--top">
                        <span className="c-order-item__name">
                            Đầm Ôm Elain - S
                        </span>
                        <span className="c-order-item__quantity">x1</span>
                    </div>
                    <span className="c-order-item__id">B004R007</span>
                </div>
                <span className="c-order-item__price">675.000 VNĐ</span>
            </div>
        </div>
    );
}

export default OrderItem;
