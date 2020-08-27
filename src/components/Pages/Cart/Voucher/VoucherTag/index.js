import React from "react";
import PropTypes from "prop-types";

VoucherTag.propTypes = {
    code: PropTypes.string,
};

VoucherTag.defaultProps = {
    code: null,
};

function VoucherTag(props) {
    if (!props.code) return <div className="c-voucher-tag"></div>;
    console.log('props.code :>> ', props.code);
    return (
        <div className="c-voucher-tag">
            <span className="c-voucher-tag__text">{props.code}</span>
        </div>
    );
}

export default VoucherTag;
