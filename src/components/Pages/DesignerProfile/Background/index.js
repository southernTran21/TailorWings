import React from "react";
import PropTypes from "prop-types";
import Background from "components/Background";
import Avatar from "components/Avatar";

DesignerBackground.propTypes = {
    avatar: PropTypes.string,
    background: PropTypes.string,
};

DesignerBackground.defaultProps = {
    avatar: "",
    background: null,
};

function DesignerBackground(props) {
    return (
        <div className="c-designer-background">
            <Background background={props.background} />
            <div className="c-designer-background__avatar">
                <Avatar image={props.avatar} />
            </div>
        </div>
    );
}

export default DesignerBackground;
