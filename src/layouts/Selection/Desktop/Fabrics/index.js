import FabricDesktop from "components/Pages/Selection/Desktop/Fabrics";
import React, { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";

function FabricsContainerDesktop() {
    /*--------------*/
    const renderFabrics = useSelector((state) => state.selection.renderFabrics);
    const renderProduct = useSelector((state) => state.selection.renderProduct);
    /*--------------*/
    const [activeIndex, setActiveIndex] = useState(null);
    /*--------------*/
    useEffect(() => {
        let activeIndex = renderFabrics.findIndex((fabric) => fabric.isActive);
        if (activeIndex > -1) {
            setActiveIndex(activeIndex);
        }
    }, [renderFabrics]);
    /*--------------*/
    if (!renderFabrics) return <Fragment />;
    let designID = renderProduct ? renderProduct.designID : null;
    return (
        <section className="l-selection__fabric-desktop">
            <FabricDesktop
                renderFabrics={renderFabrics}
                activeIndex={activeIndex}
                designID={designID}
            />
        </section>
    );
}

export default FabricsContainerDesktop;
