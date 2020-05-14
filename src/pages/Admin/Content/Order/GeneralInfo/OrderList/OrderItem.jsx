import React from "react";
import PropTypes from "prop-types";

OrderItem.propTypes = {
    order: PropTypes.object,
};

OrderItem.defaultProps = {
    order: null,
};

function OrderItem(props) {
    let order = props.order;
    if (!order) return null;
    return (
        <div>
            <li>{`${order.orderID} - ${order.cusName}`}</li>
        </div>
    );
}

export default OrderItem;
