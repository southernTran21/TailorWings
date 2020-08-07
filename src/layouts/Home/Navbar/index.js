import React from "react";
import PropTypes from "prop-types";
import NavbarShopping from "components/Navbar/NavbarShopping";

NavbarContainer.propTypes = {};

function NavbarContainer(props) {
    return (
        <section className="l-home__navbar">
            <NavbarShopping />
        </section>
    );
}

export default NavbarContainer;
