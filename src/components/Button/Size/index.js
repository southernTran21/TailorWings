import React, { Fragment } from "react";
import PropTypes from "prop-types";

ButtonSize.propTypes = {
    text: PropTypes.string,
    active: PropTypes.bool,
};

ButtonSize.defaultProps = {
    text: null,
    active: false,
};

function ButtonSize(props) {
    if (!props.text) return <Fragment />;

    let activeClass = props.active ? "c-button-size--active" : "";
    return (
        <button className={`c-button-size ${activeClass}`}>{props.text}</button>
    );
}

export default ButtonSize;

// ---------- NOTES ----------
// active supported: true or false
// ---------- END ----------
