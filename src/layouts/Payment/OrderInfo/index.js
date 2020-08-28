import React from "react";
import PropTypes from "prop-types";
import OrderInfo from "components/Pages/Payment/OrderInfo";

OrderInfoContainer.propTypes = {
    cartList: PropTypes.array,
};

OrderInfoContainer.defaultProps = {
    cartList: null,
};

function OrderInfoContainer(props) {
    return (
        <section className="l-payment__order-info">
            <OrderInfo cartList={props.cartList} />
        </section>
    );
}

export default OrderInfoContainer;
