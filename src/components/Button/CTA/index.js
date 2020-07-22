import React, { Fragment } from "react";
import PropTypes from "prop-types";

ButtonCTA.propTypes = {
    text: PropTypes.string,
    size: PropTypes.string,
};

ButtonCTA.defaultProps = {
    text: null,
    size: 16
};

function ButtonCTA(props) {
    if (!props.text) return <Fragment />;

    return <button className={`button-CTA button-CTA--size${props.size}`}>{props.text}</button>;
}

export default ButtonCTA;

// ------------ NOTE -------------
// Size supported: 16(default) | 18
// Example: <BuutonCTA text="EXAMPLE" size="18" />
