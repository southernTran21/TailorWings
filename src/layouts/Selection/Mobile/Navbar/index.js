import NavbarSelection from "components/Navbar/NavbarSelection";
import React from "react";

function NavbarContainer() {
    return (
        <div className="l-selection__navbar">
            <NavbarSelection
                text="CHỌN VẢI"
                backLink={{ pathname: "/designs", search: "?cat=all" }}
            />
        </div>
    );
}

export default NavbarContainer;
