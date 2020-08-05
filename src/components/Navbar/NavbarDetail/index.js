import React from "react";
import PropTypes from "prop-types";
import CartInfo from "components/CartInfo";
import ButtonBack from "../../../assets/Icon/back-button.svg";

NavbarDetail.propTypes = {};

function NavbarDetail(props) {
    return (
        <div className="c-navbar-selection">
            <div className="c-navbar-selection__back">
                <img src={ButtonBack} alt="" />
            </div>
            <div className="c-navbar-selection__title">
                <span>CHỌN VẢI</span>
            </div>
            <div className="c-navbar-selection__info">
                <CartInfo />
            </div>
        </div>
    );
}

export default NavbarDetail;
