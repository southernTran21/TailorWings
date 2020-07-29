import React from "react";
import PropTypes from "prop-types";
import Background from "components/Background";
import Avatar from "components/Avatar";

DesignerBackground.propTypes = {};

function DesignerBackground(props) {
    return (
        <div className="c-designer-background">
            <Background />
            <div className="c-designer-background__avatar">
                <Avatar />
            </div>
        </div>
    );
}

export default DesignerBackground;
