import React from "react";
import PropTypes from "prop-types";
import NavbarContainer from "./Navbar";
import BannerContainer from "./Bannner";
import OptionsContainer from "./Options";
import Avatar from "components/Avatar";
import image from "../../assets/Image/tailor-recruitment.png";
import ListContainer from "./List";

DesignsContainer.propTypes = {};

function DesignsContainer(props) {
    return (
        <div className="l-designs">
            <NavbarContainer />
            <BannerContainer />
            <OptionsContainer />
            <ListContainer />
        </div>
    );
}

export default DesignsContainer;