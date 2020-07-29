import OptionsContainer from "layouts/Designs/Options";
import React from "react";
import BackgroundContainer from "./Background";
import InfoContainer from "./Info";
import DesignListContainer from "./DesignList";

DesignerProfileContainer.propTypes = {};

function DesignerProfileContainer(props) {
    return (
        <div className="l-designer">
            <BackgroundContainer />
            <InfoContainer />
            <OptionsContainer />
            <DesignListContainer />
        </div>
    );
}

export default DesignerProfileContainer;
