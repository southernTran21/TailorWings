import React from "react";
import PropTypes from "prop-types";
import ButtonConfirm from "components/Button/Confirm";

Footer.propTypes = {
    finalPrice: PropTypes.string,
    onConfirm: PropTypes.func,
};

Footer.defaultProps = {
    finalPrice: "0",
    onConfirm: null,
};

function Footer(props) {
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
                        props.finalPrice !== "0"
                            ? {
                                  pathname: "/info",
                              }
                            : null
                    }
                />
            </div>
        </div>
    );
}

export default Footer;
