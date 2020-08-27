import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import VoucherInput from "./VoucherInput";
import VoucherTag from "./VoucherTag";

Voucher.propTypes = {
    isVoucherApplied: PropTypes.bool,
    onApplyVoucher: PropTypes.func,
    voucher: PropTypes.object,
};

Voucher.defaultProps = {
    isVoucherApplied: false,
    onApplyVoucher: null,
    voucher: null,
};

function Voucher(props) {
    /*--------------*/
    const [voucherInput, setVoucherInput] = useState(
        props.voucher ? props.voucher.code : ""
    );
    /*--------------*/
    /*********************************
     *  Description: handle voucher input changing
     *
     *
     *  Call by:
     */
    function onVoucherInputChange(e) {
        let voucher = e.target.value;
        /*--------------*/
        if (voucher !== null && voucher !== undefined) {
            setVoucherInput(voucher);
        }
    }
    /************_END_****************/
    /*--------------*/
    if (!props.onApplyVoucher) return <Fragment />;
    let code = props.voucher ? props.voucher.code : null;
    return (
        <Fragment>
            {props.isVoucherApplied ? (
                <div className="c-cart-voucher">
                    <VoucherTag code={code} />
                    <div className="c-cart-voucher__button c-cart-voucher__button--passive">
                        <span>ÁP DỤNG</span>
                    </div>
                </div>
            ) : (
                <div className="c-cart-voucher">
                    <VoucherInput
                        onChange={onVoucherInputChange}
                        value={voucherInput}
                    />
                    <div
                        className="c-cart-voucher__button"
                        onClick={() => props.onApplyVoucher(voucherInput)}
                    >
                        <span>ÁP DỤNG</span>
                    </div>
                </div>
            )}
        </Fragment>
    );
}

export default Voucher;
