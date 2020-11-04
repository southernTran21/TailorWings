import SelectionFabrics from "components/Pages/Selection/Mobile/Fabrics";
import React from "react";
import { useSelector } from "react-redux";

function FabricsContainer() {
    /*--------------*/
    const renderPatterns = useSelector(
        (state) => state.selection.renderPatterns
    );
    const renderProduct = useSelector((state) => state.selection.renderProduct);
    /*--------------*/
    let patternID = renderProduct ? renderProduct.idPattern : null;
    let designID = renderProduct ? renderProduct.idDesign : null;
    /*--------------*/
    return (
        <div className="l-selection__fabrics">
            <SelectionFabrics
                renderPatterns={renderPatterns}
                patternID={patternID}
                designID={designID}
            />
        </div>
    );
}

export default FabricsContainer;
