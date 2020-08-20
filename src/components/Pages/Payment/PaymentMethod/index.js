import React from "react";
import PropTypes from "prop-types";
import { Radio } from "antd";

PaymentMethod.propTypes = {};

function PaymentMethod(props) {
    return (
        <div className="c-payment-method">
            <span className="c-payment-method__title">
                Chọn hình thức thanh toán
            </span>
            <Radio.Group value={1}>
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
