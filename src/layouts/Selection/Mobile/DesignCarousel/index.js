import React, { Fragment } from "react";
import SelectionDesignCarousel from "components/Pages/Selection/Mobile/DesignCarousel";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

DesignCarouselContainer.propTypes = {
    isImageLoading: PropTypes.bool,
};

DesignCarouselContainer.propTypes = {
    isImageLoading: false,
};

function DesignCarouselContainer(props) {
    /*--------------*/
    const renderProduct = useSelector((state) => state.selection.renderProduct);
    /*--------------*/
    if (!renderProduct) return <Fragment />;
    return (
        <div className="l-selection__design-carousel">
            <SelectionDesignCarousel
                images={renderProduct.image}
                id={renderProduct.productID}
                isImageLoading={props.isImageLoading}
            />
        </div>
    );
}

export default DesignCarouselContainer;
