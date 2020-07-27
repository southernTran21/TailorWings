import React from "react";
import PropTypes from "prop-types";
import NavbarContainer from "./Navbar";
import BannerContainer from "./Bannner";
import OptionsContainer from "./Options";

DesignsContainer.propTypes = {};

function DesignsContainer(props) {
    return (
        <div className="l-designs">
            <NavbarContainer />
            <BannerContainer />
            <OptionsContainer />
        </div>
    );
}

export default DesignsContainer;
