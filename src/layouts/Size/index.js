import React from "react";
import BodyImageContainer from "./BodyImage";
import InfoContainer from "./Info";
import NavbarContainer from "./Navbar";
import OptionContentContainer from "./OptionContent";
import OptionsContainer from "./Options";
import ProductImagesContainer from "./ProductImages";

SizeContainer.propTypes = {};

function SizeContainer(props) {
    return (
        <div className="l-size">
            <NavbarContainer />
            <BodyImageContainer />
            <OptionsContainer />
            <OptionContentContainer />
            <InfoContainer />
            <ProductImagesContainer />
        </div>
    );
}

export default SizeContainer;
