import Background from "components/Background";
import React from "react";
import PropTypes from "prop-types";

FabricDetailBackground.propTypes = {
    background: PropTypes.string,
};

FabricDetailBackground.propTypes = {
    background: PropTypes.string,
};

function FabricDetailBackground(props) {
    return (
        <div className="c-fabric-detail-background">
            <Background
                background={props.background}
                backLink={{ pathname: "/fabrics", search: "" }}
            />
        </div>
    );
}

export default FabricDetailBackground;
