import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ButtonConfirm from "components/Button/Confirm";

FooterPayment.propTypes = {
    price: PropTypes.object,
    voucher: PropTypes.object,
    onOrderConfirm: PropTypes.func,
};

FooterPayment.defaultProps = {
    price: null,
    voucher: null,
    onOrderConfirm: null
};

function FooterPayment(props) {
    if (!props.price || !props.onOrderConfirm) return <Fragment />;
    const { totalPrice, discountPrice, finalPrice } = props.price;
    return (
        <div className="c-payment-footer">
            <div className="c-payment-footer__content">
                <span className="c-payment-footer__title">Tổng</span>
                <span className="c-payment-footer__free">{totalPrice}</span>
            </div>
            <div className="c-payment-footer__content">
                <span className="c-payment-footer__title">Giảm</span>
                <span className="c-payment-footer__free">
                    - {discountPrice}{" "}
                    {props.voucher ? `| ${props.voucher.value}` : ""}
                </span>
            </div>
            <div className="c-payment-footer__content">
                <span className="c-payment-footer__title">Voucher</span>
                <span className="c-payment-footer__free">
                    {props.voucher ? props.voucher.code : "_"}
                </span>
            </div>
            <div className="c-payment-footer__content">
                <span className="c-payment-footer__title">Phí giao hàng</span>
                <span className="c-payment-footer__free">MIỄN PHÍ</span>
            </div>
            <div className="c-payment-footer__content">
                <span className="c-payment-footer__title">Thành tiền</span>
                <span className="c-payment-footer__price">
                    {finalPrice} VNĐ
                </span>
            </div>
            <div className="c-payment-footer__button">
                <ButtonConfirm
                    text="HOÀN TẤT ĐẶT HÀNG"
                    padding="1rem 6.5rem"
                    onConfirm={props.onOrderConfirm}
                />
            </div>
        </div>
    );
}

export default FooterPayment;
