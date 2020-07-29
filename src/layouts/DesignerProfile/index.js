import React from "react";
import PropTypes from "prop-types";
import BackgroundContainer from "./Background";
import InfoContainer from "./Info";

DesignerProfileContainer.propTypes = {};

function DesignerProfileContainer(props) {
    return (
        <div className="l-designer">
            <BackgroundContainer />
            <InfoContainer />
        </div>
    );
}

export default DesignerProfileContainer;
