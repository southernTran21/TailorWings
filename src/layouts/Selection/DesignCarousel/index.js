import React from "react";
import PropTypes from "prop-types";
import SelectionDesignCarousel from "components/Pages/Selection/DesignCarousel";

DesignCarouselContainer.propTypes = {};

function DesignCarouselContainer(props) {
    return (
        <div className="l-selection__design-carousel">
            <SelectionDesignCarousel />
        </div>
    );
}

export default DesignCarouselContainer;
