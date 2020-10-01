import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import MenuIcon from "../../../assets/Icon/menu.svg";
import Logo from "../../../assets/Icon/logo.svg";
import CartInfo from "components/CartInfo";
import { Link } from "react-router-dom";
import Sidebar from "components/Sidebar";
import IconSearch from "../../../assets/Icon/icon-search.svg";
import IconPerson from "../../../assets/Icon/person-outline.svg";
import { useSelector } from "react-redux";

NavbarShopping.propTypes = {
    cartQuantity: PropTypes.string,
    onLoginDisplayStatusChange: PropTypes.func,
};

NavbarShopping.defaultProps = {
    cartQuantity: 0,
    onLoginDisplayStatusChange: null,
};

function NavbarShopping(props) {
    /*--------------*/
    const [isSidebar, setIsSidebar] = useState(false);
    const [quantity, setQuantity] = useState(0);
    /*--------------*/
    const addNewFlag = useSelector((state) => state.size.addNewFlag);
    const isCartDeleted = useSelector((state) => state.cart.isCartDeleted);
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        const cartList = JSON.parse(window.localStorage.getItem("cart")) || [];
        /*--------------*/
        setQuantity(cartList.length);
        /*--------------*/
    }, [addNewFlag, isCartDeleted]);
    /*********************************
     *  Description: handle updating isSidebar state to be false
     *
     *
     *  Call by:
     */
    function onSidebarClosed() {
        setIsSidebar(false);
    }
    /************_END_****************/
    if (!props.onLoginDisplayStatusChange) return <Fragment />;
    return (
        <div className="c-navbar-shopping">
            <div className="c-navbar-shopping__menu">
                <img
                    src={MenuIcon}
                    alt="menu-icon"
                    onClick={() => setIsSidebar(!isSidebar)}
                />
            </div>
            <div className="c-navbar-shopping__logo">
                <Link
                    to={{
                        pathname: "/",
                    }}
                >
                    <img src={Logo} alt="tailorwings" />
                </Link>
            </div>
            <div className="c-navbar-shopping__search">
                <input type="text" placeholder="Bạn muốn may đầm gì?" />
                <img src={IconSearch} alt="search-icon" />
            </div>
            <div className="c-navbar-shopping__info">
                {/* <Link to="/login"> */}
                <div
                    className="c-navbar-shopping__person"
                    onClick={props.onLoginDisplayStatusChange}
                >
                    <img src={IconPerson} alt="person-icon" />
                </div>
                {/* </Link> */}
                <CartInfo active={true} quantity={quantity} />
            </div>
            <Sidebar isSidebar={isSidebar} onSidebarClosed={onSidebarClosed} />
        </div>
    );
}

export default NavbarShopping;
