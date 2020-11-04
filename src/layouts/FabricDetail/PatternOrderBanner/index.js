import PatternOrderBanner from "components/Pages/FabricDetail/PatternOrderBanner";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";

function PatternOrderBannerContainer() {
    /*--------------*/
    const selectedPattern = useSelector(
        (state) => state.fabricDetail.selectedPattern
    );
    const selectedFabricType = useSelector(
        (state) => state.fabricDetail.selectedFabricType
    );
    /*--------------*/
    if (!selectedPattern) return <Fragment />;
    /*--------------*/
    const { image, price } = selectedPattern;
    const { name } = selectedFabricType;
    /*--------------*/
    return (
        <div className="l-fabric-detail__pattern-order-banner">
            <PatternOrderBanner
                image={image}
                price={isNaN(price) ? 0 : price}
                fabricTypeName={name}
            />
        </div>
    );
}

export default PatternOrderBannerContainer;
