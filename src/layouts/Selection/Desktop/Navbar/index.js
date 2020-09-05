import React from "react";
import PropTypes from "prop-types";
import NavbarSelection from "components/Navbar/NavbarSelection";

NavbarContainerDesktop.propTypes = {
    selectionSrc: PropTypes.object,
};

NavbarContainerDesktop.defaultProps = {
    selectionSrc: { pathname: "/", search: "" },
};

function NavbarContainerDesktop(props) {
    return (
        <section className="l-selection__navbar-desktop">
            <NavbarSelection text="CHỌN VẢI" backLink={props.selectionSrc} />
        </section>
    );
}

export default NavbarContainerDesktop;
