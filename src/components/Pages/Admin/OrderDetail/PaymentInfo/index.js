import React, { Fragment } from "react";
import PropTypes from "prop-types";
import OrderDetailPaymentStatus from "../PaymentStatus";

OrderDetailPayment.propTypes = {
    price: PropTypes.object,
    status: PropTypes.object,
};

OrderDetailPayment.defaultProps = {
    price: null,
    status: null,
};

function OrderDetailPayment(props) {
    if (!props.price || !props.status) return <Fragment />;
    const discountPrice = props.price.discountPrice.toString();
    const totalPrice = props.price.totalPrice.toString();
    const finalPrice = props.price.finalPrice.toString();
    return (
        <div className="c-order-detail-payment">
            <div className="c-order-detail-payment__header">
                <div className="c-order-detail-payment__title">
                    Thông tin thanh toán
                </div>
                <OrderDetailPaymentStatus
                    status={props.status}
                />
            </div>
            <div className="c-order-detail-payment__content">
                <div className="c-order-detail-payment__sub-info">
                    <span>Giá tổng</span>
                    <span>{`${totalPrice}đ`}</span>
                </div>
                <div className="c-order-detail-payment__sub-info">
                    <span>Giảm giá</span>
                    <span>{`-${discountPrice}đ`}</span>
                </div>
                <div className="c-order-detail-payment__sub-info">
                    <span>Phí giao hàng</span>
                    <span>MIỄN PHí</span>
                </div>
                <div className="c-order-detail-payment__info">
                    <span>Thành tiền</span>
                    <span>{`${finalPrice}đ`}</span>
                </div>
            </div>
        </div>
    );
}

export default OrderDetailPayment;
