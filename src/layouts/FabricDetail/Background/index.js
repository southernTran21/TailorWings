import React from "react";
import PropTypes from "prop-types";
import FabricDetailBackground from "../../../components/Pages/FabricDetail/Background";

BackgroundContainer.propTypes = {
    background: PropTypes.string,
};

BackgroundContainer.defaultProps = {
    background: null,
};

function BackgroundContainer(props) {
    return (
        <section className="l-fabric-detail__background">
            <FabricDetailBackground background={props.background} />
        </section>
    );
}

export default BackgroundContainer;
