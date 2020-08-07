import React from "react";
import NavbarContainer from "./Navbar";
import FabricsContainer from "./Fabrics";
import DesignCarouselContainer from "./DesignCarousel";
import InfoContainer from "./Info";
import DescriptionContainer from "./Description";
import TopProductsContainer from "./TopProducts";

SelectionContainer.propTypes = {};

function SelectionContainer(props) {
    return (
        <div className="l-selection">
            <NavbarContainer />
            <FabricsContainer />
            <DesignCarouselContainer />
            <InfoContainer />
            <DescriptionContainer />
            <TopProductsContainer />
        </div>
    );
}

export default SelectionContainer;
