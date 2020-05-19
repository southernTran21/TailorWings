import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";

function ItemList() {
    const orderDetail = useSelector(
        (state) => state.adminOrderReducer.orderDetail
    );
    const { orderItems } = orderDetail;
    if (!orderItems)
        return <div className="admin-order-detail__item-list"></div>;
    return (
        <div className="admin-order-detail__item-list">
            <div className="admin-order-detail__item-list__title">
                <span className="admin-order-detail__item-list__title--1">
                    {orderItems.length}
                </span>
                <span className="admin-order-detail__item-list__title--2">
                    {" "}
                    items
                </span>
            </div>
            {orderItems
                ? orderItems.map((order, index) => {
                      return <Item key={index} order={order} />;
                  })
                : ""}
        </div>
    );
}

export default ItemList;
