import React from "react";
import PropTypes from "prop-types";
import ButtonConfirm from "components/Button/Confirm";

Footer.propTypes = {
    finalPrice: PropTypes.string,
    onConfirm: PropTypes.func,
};

Footer.defaultProps = {
    finalPrice: null,
    onConfirm: null,
};

function Footer(props) {
    console.log('props.finalPrice :>> ', props.finalPrice);
    if (!props.onConfirm)
        return (
            <div className="c-cart-footer">
                <div className="c-cart-footer__text">
                    <span className="c-cart-footer__title">Thành tiền</span>
                    <span className="c-cart-footer__price">
                        {props.finalPrice} VNĐ
                    </span>
                </div>
            </div>
        );
    return (
        <div className="c-cart-footer">
            <div className="c-cart-footer__text">
                <span className="c-cart-footer__title">Thành tiền</span>
                <span className="c-cart-footer__price">
                    {props.finalPrice} VNĐ
                </span>
            </div>
            <div className="c-cart-footer__button">
                <ButtonConfirm
                    text="THANH TOÁN"
                    padding="1.5rem 8.4rem"
                    onConfirm={props.onConfirm}
                    linkTo={
                        props.finalPrice
                            ? {
                                  pathname: "/info",
                              }
                            : {
                                pathname: "/cart"
                            }
                    }
                />
            </div>
        </div>
    );
}

export default Footer;
