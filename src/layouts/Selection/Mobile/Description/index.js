import SelectionDescription from "components/Pages/Selection/Mobile/Description";
import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchDesignInfo, fetchFabricInfo } from "services/FirebaseAPI/basic";

function DescriptionContainer() {
    /*--------------*/
    const selectedDesign = useSelector((state) => state.selection.selectedDesign);
    const selectedFabricType = useSelector((state) => state.selection.selectedFabricType);
    /*--------------*/
    if (!selectedDesign || !selectedFabricType) return <Fragment />;
    /*--------------*/
    let designDesc = selectedDesign.description.split("-");
    let fabricDesc = selectedFabricType.description.split("-");
    /*--------------*/
    return (
        <div className="l-selection__desc">
            <SelectionDescription
                designDesc={designDesc}
                fabricDesc={fabricDesc}
            />
        </div>
    );
}

export default DescriptionContainer;
