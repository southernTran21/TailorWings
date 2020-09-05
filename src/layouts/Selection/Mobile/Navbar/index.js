import NavbarSelection from "components/Navbar/NavbarSelection";
import React from "react";
import PropTypes from "prop-types";

NavbarContainer.propTypes = {
    selectionSrc: PropTypes.object,
};

NavbarContainer.defaultProps = {
    selectionSrc: { pathname: "/", search: "" },
};

function NavbarContainer(props) {
    return (
        <div className="l-selection__navbar">
            <NavbarSelection
                text="CHỌN VẢI"
                backLink={props.selectionSrc}
            />
        </div>
    );
}

export default NavbarContainer;
