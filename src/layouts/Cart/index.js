import React from "react";
import PropTypes from "prop-types";
import NavBarContainer from "./Navbar";
import ProductsContainer from "./Products";
import FooterContainer from "./Footer";
import VoucherContainer from "./Voucher";
import SummaryContainer from "./Summary";

CartContainer.propTypes = {};

function CartContainer(props) {
    return (
        <div className="l-cart">
            <NavBarContainer />
            <div className="l-cart__section1">
                <ProductsContainer />
                <div className="l-cart__section2">
                    <VoucherContainer />
                    <SummaryContainer />
                    <FooterContainer />
                </div>
            </div>
        </div>
    );
}

export default CartContainer;
