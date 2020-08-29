import React from "react";
import PropTypes from "prop-types";
import DesignerBackground from "components/Pages/DesignerProfile/Background";

BackgroundContainer.propTypes = {
    avatar: PropTypes.string,
    background: PropTypes.string,
};

BackgroundContainer.defaultProps = {
    avatar: "",
    background: null,
};

function BackgroundContainer(props) {
    return (
        <div className="l-designer__background">
            <DesignerBackground
                avatar={props.avatar}
                background={props.background}
            />
        </div>
    );
}

export default BackgroundContainer;
