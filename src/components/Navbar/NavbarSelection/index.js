import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import CartInfo from "components/CartInfo";
import ButtonBack from "../../../assets/Icon/back-button.svg";
import Search from "antd/lib/input/Search";
import { history } from "services/CommonParameter";
import { useSelector } from "react-redux";

NavbarSelection.propTypes = {
    text: PropTypes.string,
};

NavbarSelection.defaultProps = {
    text: null,
};

function NavbarSelection(props) {
    /*--------------*/
    const addNewFlag = useSelector((state) => state.size.addNewFlag);
    /*--------------*/
    const [ quantity, setQuantity ] = useState(0);
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        const cartList = JSON.parse(window.localStorage.getItem("cart")) || [];
        /*--------------*/
        setQuantity(cartList.length);
        /*--------------*/
    }, [addNewFlag]);
    /*--------------*/
    if (!props.text) return <Fragment />;
    return (
        <div className="c-navbar-selection">
            <div className="c-navbar-selection__back" onClick={() => history.goBack()}>
                <img src={ButtonBack} alt="button-back-icon" />
            </div>
            <div className="c-navbar-selection__title">
                <span>{props.text}</span>
            </div>
            <div className="c-navbar-selection__info">
                <CartInfo quantity={quantity}/>
            </div>
        </div>
    );
}

export default NavbarSelection;
