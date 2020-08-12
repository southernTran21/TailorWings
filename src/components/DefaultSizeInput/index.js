import React from "react";
import PropTypes from "prop-types";
import ButtonSize from "components/Button/Size";

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

DefaultSizeInput.propTypes = {};

function DefaultSizeInput(props) {
    return (
        <ul className="c-size-default">
            {SIZES.map((size, index) => {
                return (
                    <li key={index} className="c-size-default__item">
                        <ButtonSize text={size} />
                    </li>
                );
            })}
        </ul>
    );
}

export default DefaultSizeInput;
