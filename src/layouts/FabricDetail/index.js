import React from "react";
import BackgroundContainer from "./Background";
import OptionsContainer from "./Options";
import DesignListContainer from "./DesignList";
import FabricDetailInfoContainer from "./Info";

function FabricDetailContainer() {
    return (
        <div className="l-fabric-detail">
            <BackgroundContainer />
            <FabricDetailInfoContainer />
            <OptionsContainer />
            <DesignListContainer />
        </div>
    );
}

export default FabricDetailContainer;
