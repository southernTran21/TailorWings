import React from "react";
import PropTypes from "prop-types";
import OrderItem from "./OrderItem";
import { Link } from "react-router-dom";

OrderInfo.propTypes = {
    cartList: PropTypes.array,
};

OrderInfo.defaultProps = {
    cartList: null,
};

function OrderInfo(props) {
    if (!props.cartList)
        return (
            <div className="c-order-info">
                <div className="c-order-info__head">
                    <span className="c-order-info__title">
                        Thông tin đơn hàng
                    </span>
                    <span className="c-order-info__sub-title">THAY ĐỔI</span>
                </div>
                <ul className="c-order-info__list"></ul>
            </div>
        );
    /*--------------*/
    return (
        <div className="c-order-info">
            <div className="c-order-info__head">
                <span className="c-order-info__title">Thông tin đơn hàng</span>
                <Link
                    to={{
                        pathname: "/cart",
                    }}
                >
                    <span className="c-order-info__sub-title">THAY ĐỔI</span>
                </Link>
            </div>
            <ul className="c-order-info__list">
                {props.cartList.map((item, index) => {
                    return <OrderItem key={index} info={item} />;
                })}
            </ul>
        </div>
    );
}

export default OrderInfo;
