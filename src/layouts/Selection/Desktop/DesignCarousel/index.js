import React from "react";
import PropTypes from "prop-types";
import DesignCarouselDesktop from "components/Pages/Selection/Desktop/DesignCarousel";
DesignCarouselContainerDesktop.propTypes = {};

function DesignCarouselContainerDesktop(props) {
    return (
        <section className="l-selection__design-carousel-desktop">
            <DesignCarouselDesktop />
        </section>
    );
}

export default DesignCarouselContainerDesktop;
