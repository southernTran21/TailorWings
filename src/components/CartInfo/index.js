import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

CartInfo.propTypes = {
    active: PropTypes.bool,
    quantity: PropTypes.number,
};
CartInfo.defaultProps = {
    active: false,
    quantity: 0,
};

function CartInfo(props) {
    let activeClass = props.active ? "c-cart-info--active" : "";
    return (
        <Link to="/cart">
            <div className={`c-cart-info ${activeClass}`}>
                <span>{props.quantity}</span>
            </div>
        </Link>
    );
}

export default CartInfo;

// ---------- NOTES ----------
// active supported: true or false
// ---------- END ----------
