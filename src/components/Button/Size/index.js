import React, { Fragment } from "react";
import PropTypes from "prop-types";

ButtonSize.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    isActive: PropTypes.bool,
    handleClick: PropTypes.func,
};

ButtonSize.defaultProps = {
    id: null,
    text: null,
    isActive: false,
    handleClick: null,
};

function ButtonSize(props) {
    if (!props.id || !props.text || !props.handleClick) return <Fragment />;

    let activeClass = props.isActive ? "c-button-size--active" : "";
    return (
        <button
            className={`c-button-size ${activeClass}`}
            onClick={() => props.handleClick(props.id)}
        >
            {props.text}
        </button>
    );
}

export default ButtonSize;

// ---------- NOTES ----------
// active supported: true or false
// ---------- END ----------
