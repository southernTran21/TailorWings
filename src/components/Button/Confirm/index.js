import React from "react";
import PropTypes from "prop-types";
import { Fragment } from "react";
import rightArrow from "../../../assets/Icon/right-arrow-white.svg";
import { Link } from "react-router-dom";

ButtonConfirm.propTypes = {
    text: PropTypes.string,
    padding: PropTypes.string,
    onConfirm: PropTypes.func,
    linkTo: PropTypes.object,
};

ButtonConfirm.defaultProps = {
    text: null,
    padding: "1.5rem 10rem",
    onConfirm: null,
    linkTo: null,
};

function ButtonConfirm(props) {
    if (!props.text || !props.onConfirm) return <Fragment />;
    if (props.linkTo) {
        return (
            <Link to={props.linkTo}>
                <button
                    className="c-button-confirm"
                    style={{ padding: props.padding }}
                    onClick={() => props.onConfirm()}
                >
                    <span className="c-button-confirm__text">{props.text}</span>
                    <img
                        className="c-button-confirm__icon"
                        src={rightArrow}
                        alt={props.text}
                    />
                </button>
            </Link>
        );
    } else {
        return (
            <button
                className="c-button-confirm"
                style={{ padding: props.padding }}
                onClick={() => props.onConfirm()}
            >
                <span className="c-button-confirm__text">{props.text}</span>
                <img
                    className="c-button-confirm__icon"
                    src={rightArrow}
                    alt={props.text}
                />
            </button>
        );
    }
}

export default ButtonConfirm;

// ---------- NOTES ----------
// How to use:
// default padding: 1.5rem 10rem
// Example: <ButtonConfirm text="EXAMPLE" padding="1.5rem 8.4rem"
// ---------- END ----------
