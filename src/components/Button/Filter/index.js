import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

ButtonFilter.propTypes = {
    info: PropTypes.object,
    handleClick: PropTypes.func,
    linkTo: PropTypes.object,
};

ButtonFilter.defaultProps = {
    info: null,
    handleClick: null,
    linkTo: null,
};

function ButtonFilter(props) {
    if (!props.info || !props.handleClick) return <Fragment />;

    const { id, name, isActive, index } = props.info;
    let activeClass = isActive ? "c-button-filter--active" : "";
    if (props.linkTo) {
        return (
            <Link
                to={{
                    pathname: props.linkTo.pathname,
                    search: `${props.linkTo.search}${id}`,
                }}
            >
                <button
                    className={`c-button-filter ${activeClass}`}
                    onClick={() => props.handleClick(id, index)}
                >
                    {name}
                </button>
            </Link>
        );
    } else {
        return (
            <button
                className={`c-button-filter ${activeClass}`}
                onClick={() => props.handleClick(id, index)}
            >
                {name}
            </button>
        );
    }
}

export default ButtonFilter;
