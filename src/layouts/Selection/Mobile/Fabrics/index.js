import SelectionFabrics from "components/Pages/Selection/Fabrics";
import React, { useState, Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function FabricsContainer() {
    /*--------------*/
    const renderFabrics = useSelector((state) => state.selection.renderFabrics);
    /*--------------*/
    const [activeIndex, setActiveIndex] = useState(0);
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
