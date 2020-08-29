import DesignCarouselDesktop from "components/Pages/Selection/Desktop/DesignCarousel";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";

function DesignCarouselContainerDesktop() {
    /*--------------*/
    const renderProduct = useSelector((state) => state.selection.renderProduct);
    /*--------------*/
    if (!renderProduct) return <Fragment />;
    return (
        <section className="l-selection__design-carousel-desktop">
            <DesignCarouselDesktop images={renderProduct.image} id={renderProduct.productID} />
        </section>
    );
}

export default DesignCarouselContainerDesktop;
