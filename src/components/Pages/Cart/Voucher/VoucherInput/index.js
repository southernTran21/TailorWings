import React, { Fragment } from "react";
import PropTypes from "prop-types";

VoucherInput.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
};

VoucherInput.defaultProps = {
    onChange: null,
    value: "",
};

function VoucherInput(props) {
    /*--------------*/
    if (!props.onChange) return <Fragment />;
    return (
        <div className="c-voucher-input">
            <input
                type="text"
                placeholder="Mã Giảm Giá"
                value={props.value}
                maxLength="20"
                onChange={props.onChange}
            />
        </div>
    );
}

export default VoucherInput;
