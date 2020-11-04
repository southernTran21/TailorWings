import NavbarSelection from "components/Navbar/NavbarSelection";
import React from "react";
import { useSelector } from "react-redux";

function NavbarContainer() {
    /*--------------*/
    const src = useSelector((state) => state.selection.src);
    /*--------------*/
    return (
        <div className="l-selection__navbar">
            <NavbarSelection text="CHỌN VẢI" backLink={src} />
        </div>
    );
}

export default NavbarContainer;
