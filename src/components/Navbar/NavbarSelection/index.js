import CartInfo from "components/CartInfo";
import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { history } from "services/CommonParameter";
import ButtonBack from "../../../assets/Icon/back-button.svg";

NavbarSelection.propTypes = {
    text: PropTypes.string,
    backLink: PropTypes.object,
};

NavbarSelection.defaultProps = {
    text: null,
    backLink: null,
};

function NavbarSelection(props) {
    /*--------------*/
    const addNewFlag = useSelector((state) => state.size.addNewFlag);
    const isCartDeleted = useSelector((state) => state.cart.isCartDeleted);
    /*--------------*/
    const [quantity, setQuantity] = useState(0);
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        const cartList = JSON.parse(window.localStorage.getItem("cart")) || [];
        /*--------------*/
        setQuantity(cartList.length);
        /*--------------*/
    }, [addNewFlag, isCartDeleted]);
    /*--------------*/
    if (!props.text) return <Fragment />;
    if (props.backLink) {
        const { pathname, search } = props.backLink;
        return (
            <div className="c-navbar-selection">
                <Link
                    to={{
                        pathname: pathname,
                        search: search,
                    }}
                >
                    <div className="c-navbar-selection__back">
                        <img src={ButtonBack} alt="button-back-icon" />
                    </div>
                </Link>
                <Link to="/">
                    <div className="c-navbar-selection__title">
                        <span>{props.text}</span>
                    </div>
                </Link>
                <div className="c-navbar-selection__info">
                    <CartInfo quantity={quantity} />
                </div>
            </div>
        );
    } else {
        return (
            <div className="c-navbar-selection">
                <div
                    className="c-navbar-selection__back"
                    onClick={() => history.goBack()}
                >
                    <img src={ButtonBack} alt="button-back-icon" />
                </div>
                <Link to="/">
                    <div className="c-navbar-selection__title">
                        <span>{props.text}</span>
                    </div>
                </Link>
                <div className="c-navbar-selection__info">
                    <CartInfo quantity={quantity} />
                </div>
            </div>
        );
    }
}

export default NavbarSelection;
