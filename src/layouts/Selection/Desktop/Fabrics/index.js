import FabricDesktop from "components/Pages/Selection/Desktop/Fabrics";
import React from "react";
import { useSelector } from "react-redux";

function FabricsContainerDesktop() {
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
        <section className="l-selection__fabric-desktop">
            <FabricDesktop
                renderPatterns={renderPatterns}
                patternID={patternID}
                designID={designID}
            />
        </section>
    );
}

export default FabricsContainerDesktop;
