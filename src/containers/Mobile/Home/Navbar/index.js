import React from "react";
import PropTypes from "prop-types";
import MobileNavbarNormal from "components/Common/Navbar/MobileNavbarNormal";

Navbar.propTypes = {};

function Navbar(props) {
    return (
        <header className="m-home__navbar">
            <MobileNavbarNormal></MobileNavbarNormal>
        </header>
    );
}

export default Navbar;
