import React from "react";
import PropTypes from "prop-types";

CartInfo.propTypes = {
    active: PropTypes.bool,
};
CartInfo.defaultProps = {
    active: false,
};

function CartInfo(props) {
    let activeClass = props.active ? "cart-info--active" : "";
    let number = 0;
    return (
        <div className={`cart-info ${activeClass}`}>
            <span>{number}</span>
        </div>
    );
}

export default CartInfo;

// ---------- NOTES ----------
// active supported: true or false
// ---------- END ----------