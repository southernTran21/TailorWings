import React, { Fragment } from "react";
import PropTypes from "prop-types";

ButtonFilter.propTypes = {
    text: PropTypes.string,
    active: PropTypes.bool,
};

ButtonFilter.defaultProps = {
    text: null,
    active: false,
};

function ButtonFilter(props) {
    if (!props.text) return <Fragment />;

    let activeClass = props.active ? "c-button-filter--active" : "";
    return (
        <button className={`c-button-filter ${activeClass}`}>{props.text}</button>
    );
}

export default ButtonFilter;
