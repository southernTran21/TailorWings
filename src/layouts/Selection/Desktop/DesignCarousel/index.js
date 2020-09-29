import DesignCarouselDesktop from "components/Pages/Selection/Desktop/DesignCarousel";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

DesignCarouselContainerDesktop.propTypes = {
    isImageLoading: PropTypes.bool,
};

DesignCarouselContainerDesktop.defaultProps = {
    isImageLoading: false,
};

function DesignCarouselContainerDesktop(props) {
    /*--------------*/
    const renderProduct = useSelector((state) => state.selection.renderProduct);
    /*--------------*/
    if (!renderProduct) return <Fragment />;
    return (
        <section className="l-selection__design-carousel-desktop">
            <DesignCarouselDesktop
                images={renderProduct.image}
                id={renderProduct.productID}
                isImageLoading={props.isImageLoading}
            />
        </section>
    );
}

export default DesignCarouselContainerDesktop;
