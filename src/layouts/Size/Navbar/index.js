import React from "react";
import PropTypes from "prop-types";
import NavbarSelection from "components/Navbar/NavbarSelection";

NavbarContainer.propTypes = {};

function NavbarContainer(props) {
    return (
        <div className="l-size__navbar">
            <NavbarSelection text='CHỌN SIZE'/>
        </div>
    );
}

export default NavbarContainer;
