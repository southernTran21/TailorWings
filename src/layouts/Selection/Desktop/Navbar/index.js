import React from "react";
import NavbarSelection from "components/Navbar/NavbarSelection";
import { useSelector } from "react-redux";

function NavbarContainerDesktop() {
    /*--------------*/
    const src = useSelector((state) => state.selection.src);
    /*--------------*/
    return (
        <section className="l-selection__navbar-desktop">
            <NavbarSelection text="CHỌN VẢI" backLink={src} />
        </section>
    );
}

export default NavbarContainerDesktop;
