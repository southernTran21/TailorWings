import React from "react";
import PropTypes from "prop-types";
import IconMinus from "../../assets/Icon/minus.svg";
import IconPlus from "../../assets/Icon/plus.svg";

Quantity.propTypes = {};

function Quantity(props) {
    return (
        <div className="c-quantity">
            <div className="c-quantity__minus">
                <img src={IconMinus} alt="" />
            </div>
            <div className="c-quantity__number">
                <span>1</span>
            </div>
            <div className="c-quantity__plus">
                <img src={IconPlus} alt="" />
            </div>
        </div>
    );
}

export default Quantity;
