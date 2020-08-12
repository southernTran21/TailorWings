import React from "react";
import PropTypes from "prop-types";
import NavbarContainer from "./Navbar";
import BodyImageContainer from "./BodyImage";
import OptionsContainer from "./Options";
import OptionContentContainer from "./OptionContent";

SizeContainer.propTypes = {};

function SizeContainer(props) {
    return (
        <div className="l-size">
            <NavbarContainer />
            <BodyImageContainer />
            <OptionsContainer />
            <OptionContentContainer />
        </div>
    );
}

export default SizeContainer;
