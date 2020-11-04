import React from "react";
import { useSelector } from "react-redux";
import FabricDetailBackground from "../../../components/Pages/FabricDetail/Background";

function BackgroundContainer() {
    /*--------------*/
    const selectedPattern = useSelector(
        (state) => state.fabricDetail.selectedPattern
    );
    /*--------------*/
    if (!selectedPattern)
        return <section className="l-fabric-detail__background"></section>;
    return (
        <section className="l-fabric-detail__background">
            <FabricDetailBackground
                background={
                    typeof selectedPattern.image === "object"
                        ? selectedPattern.image.mockup
                        : null
                }
            />
        </section>
    );
}

export default BackgroundContainer;
