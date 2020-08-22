import React, { Fragment } from "react";
import SelectionDesignCarousel from "components/Pages/Selection/DesignCarousel";
import { useSelector } from "react-redux";

function DesignCarouselContainer() {
    /*--------------*/
    const renderProduct = useSelector((state) => state.selection.renderProduct);
    /*--------------*/
    if (!renderProduct) return <Fragment />;
    return (
        <div className="l-selection__design-carousel">
            <SelectionDesignCarousel renderProduct={renderProduct} />
        </div>
    );
}

export default DesignCarouselContainer;
