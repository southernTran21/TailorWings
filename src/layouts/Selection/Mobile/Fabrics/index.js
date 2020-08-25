import SelectionFabrics from "components/Pages/Selection/Mobile/Fabrics";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

function FabricsContainer() {
    /*--------------*/
    const renderFabrics = useSelector((state) => state.selection.renderFabrics);
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
    return (
        <div className="l-selection__fabrics">
            <SelectionFabrics
                renderFabrics={renderFabrics}
                activeIndex={activeIndex}
            />
        </div>
    );
}

export default FabricsContainer;
