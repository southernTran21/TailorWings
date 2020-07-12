import React, { Fragment } from "react";
import PropTypes from "prop-types";

StepItem.propTypes = {
    text: PropTypes.string.isRequired,
};

StepItem.defaultProps = {
    text: null,
};

function StepItem(props) {
    if (!props.text) return <Fragment></Fragment>;
    return <div>{props.text}</div>;
}

export default StepItem;
