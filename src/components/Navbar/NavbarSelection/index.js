import React, { Fragment } from "react";
import PropTypes from "prop-types";
import CartInfo from "components/CartInfo";
import ButtonBack from "../../../assets/Icon/back-button.svg";

NavbarSelection.propTypes = {
    text: PropTypes.string,
};

NavbarSelection.defaultProps = {
    text: null,
};

function NavbarSelection(props) {
    if (!props.text) return <Fragment />;
    return (
        <div className="c-navbar-selection">
            <div className="c-navbar-selection__back">
                <img src={ButtonBack} alt="" />
            </div>
            <div className="c-navbar-selection__title">
                <span>{props.text}</span>
            </div>
            <div className="c-navbar-selection__info">
                <CartInfo />
            </div>
        </div>
    );
}

export default NavbarSelection;
