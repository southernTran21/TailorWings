import React from "react";
import PropTypes from "prop-types";
import { modifyPrice } from "../../../../../../services/CommonFunction";

OrderItem.propTypes = {
    order: PropTypes.object,
};

OrderItem.defaultProps = {
    order: null,
};

function OrderItem(props) {
    if (!props.order) return null;
    const { orderID, orderDate, cusName, status, isPaid, total } = props.order;
    let modifiedPrice = modifyPrice(total);
    return (
        <div className="admin-order-general__order-item">
            <div className="admin-order-general__column1">
                <a href="#">{`#${orderID}`}</a>
            </div>
            <div className="admin-order-general__column2">
                <span>{orderDate}</span>
            </div>
            <div className="admin-order-general__column3">
                <span>{cusName}</span>
            </div>
            <div className="admin-order-general__column4">
                <span>{status}</span>
            </div>
            <div className="admin-order-general__column5">
                <span>{isPaid}</span>
            </div>
            <div className="admin-order-general__column6">
                <span>{modifiedPrice}</span>
            </div>
        </div>
    );
}

export default OrderItem;
