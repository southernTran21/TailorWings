import React from "react";
import PropTypes from "prop-types";
import OrderItem from "./OrderItem";

OrderList.propTypes = {};

function OrderList(props) {
    return (
        <div className="admin-order-general__order-list">
            <OrderItem />
        </div>
    );
}

export default OrderList;
