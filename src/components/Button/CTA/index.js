import React, { Fragment } from "react";
import PropTypes from "prop-types";

ButtonCTA.propTypes = {
    text: PropTypes.string,
};

ButtonCTA.defaultProps = {
    text: "BUTTON 18PT",
};

function ButtonCTA(props) {
    if (!props.text) return <Fragment />;

    return <button className="button__CTA button__CTA--size18">{props.text}</button>;
}

export default ButtonCTA;
