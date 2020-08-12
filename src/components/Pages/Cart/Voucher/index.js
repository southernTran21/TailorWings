import React, { Fragment } from "react";
import PropTypes from "prop-types";
import VoucherInput from "./VoucherInput";
import VoucherTag from "./VoucherTag";

Voucher.propTypes = {};

function Voucher(props) {
    return (
        <Fragment>
            <div className="c-cart-voucher">
                <VoucherInput />
                <div className="c-cart-voucher__button">
                    <span>ÁP DỤNG</span>
                </div>
            </div>
            <div className="c-cart-voucher">
                <VoucherTag />
                <div className="c-cart-voucher__button c-cart-voucher__button--passive">
                    <span>ÁP DỤNG</span>
                </div>
            </div>
        </Fragment>
    );
}

export default Voucher;
