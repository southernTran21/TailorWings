import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Radio } from "antd";

PaymentMethod.propTypes = {
    onPaymentMethodChange: PropTypes.func,
    paymentMethod: PropTypes.number,
};

PaymentMethod.defaultProps = {
    onPaymentMethodChange: null,
    paymentMethod: 1,
};

function PaymentMethod(props) {
    if (!props.onPaymentMethodChange) return <Fragment />;
    return (
        <div className="c-payment-method">
            <span className="c-payment-method__title">
                Chọn hình thức thanh toán
            </span>
            <Radio.Group
                value={props.paymentMethod}
                onChange={(e) => props.onPaymentMethodChange(e.target.value)}
            >
                <Radio value={1} className="c-payment-method__radio">
                    Thanh toán khi nhận hàng (COD)
                </Radio>
                <Radio value={2} className="c-payment-method__radio">
                    Thanh toán chuyển khoản
                </Radio>
            </Radio.Group>
        </div>
    );
}

export default PaymentMethod;
