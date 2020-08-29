import React from "react";
import PropTypes from "prop-types";
import FabricDetailInfo from "components/Pages/FabricDetail/Info";

FabricDetailInfoContainer.propTypes = {
    fabricInfo: PropTypes.object,
};

FabricDetailInfoContainer.defaultProps = {
    fabricInfo: null,
};

function FabricDetailInfoContainer(props) {
    return (
        <section className="l-fabric-detail__info">
            <FabricDetailInfo fabricInfo={props.fabricInfo} />
        </section>
    );
}

export default FabricDetailInfoContainer;
