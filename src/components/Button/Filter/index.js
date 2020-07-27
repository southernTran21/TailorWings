import React, { Fragment } from "react";
import PropTypes from "prop-types";

ButtonFilter.propTypes = {
    text: PropTypes.string,
    isActive: PropTypes.bool,
};

ButtonFilter.defaultProps = {
    text: null,
    isActive: false,
};

function ButtonFilter(props) {
    if (!props.text) return <Fragment />;

    let activeClass = props.isActive ? "c-button-filter--active" : "";
    return (
        <button className={`c-button-filter ${activeClass}`}>{props.text}</button>
    );
}

export default ButtonFilter;
