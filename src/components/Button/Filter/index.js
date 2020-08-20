import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

ButtonFilter.propTypes = {
    info: PropTypes.object,
    handleClick: PropTypes.func,
};

ButtonFilter.defaultProps = {
    info: null,
    handleClick: null,
};

function ButtonFilter(props) {
    if (!props.info || !props.handleClick) return <Fragment />;

    const { id, name, isActive, index } = props.info;
    let activeClass = isActive ? "c-button-filter--active" : "";
    return (
        <Link
            to={{
                pathname: "/designs",
                search: `?cat=${id}`,
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
}

export default ButtonFilter;
