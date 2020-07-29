import React from "react";
import PropTypes from "prop-types";
import DesignerBackground from "components/Pages/DesignerProfile/Background";

BackgroundContainer.propTypes = {};

function BackgroundContainer(props) {
    return (
        <div className="l-designer__background">
            <DesignerBackground />
        </div>
    );
}

export default BackgroundContainer;
