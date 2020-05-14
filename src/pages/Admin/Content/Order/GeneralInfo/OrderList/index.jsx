import React from "react";
import OrderItem from "./OrderItem";
import { useSelector } from "react-redux";

function OrderList() {
    const renderList =
        useSelector((state) => state.adminOrderReducer.renderList) || [];
    return (
        <div className="admin-order-general__order-list">
            <hr />
            <h2>Order List Table</h2>
            <ul>
                {renderList.map((order, index) => {
                    return <OrderItem key={index} order={order} />;
                })}
            </ul>
        </div>
    );
}

export default OrderList;
