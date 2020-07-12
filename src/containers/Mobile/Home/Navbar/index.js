import React from "react";
import PropTypes from "prop-types";
import ShoppingNavbar from "components/Mobile/Common/ShoppingNavbar";

NavbarContainer.propTypes = {};

function NavbarContainer(props) {
    return (
        <header className="m-home__navbar">
            <ShoppingNavbar />
        </header>
    );
}

export default NavbarContainer;
