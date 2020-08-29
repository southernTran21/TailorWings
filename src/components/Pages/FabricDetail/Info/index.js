import React, { Fragment } from "react";
import PropTypes from "prop-types";

FabricDetailInfo.propTypes = {
    fabricInfo: PropTypes.object,
};

FabricDetailInfo.defaultProps = {
    fabricInfo: null,
};

function FabricDetailInfo(props) {
    if (!props.fabricInfo) return <Fragment />;
    const { name, typeName, id, description } = props.fabricInfo;
    let modifiedDescription = description.split("-");
    modifiedDescription = modifiedDescription.filter((info) => info !== "");
    return (
        <div className="c-fabric-detail-info">
            <div className="c-fabric-detail-info__section1">
                <h2 className="c-fabric-detail-info__name">{name}</h2>
                <div className="c-fabric-detail-info__tag">
                    <span>{typeName}</span>
                </div>
            </div>
            <div className="c-fabric-detail-info__desc">
                <span>Mã vải: {id}</span>
                {modifiedDescription.map((desc, index) => {
                    return <span key={index}>- {desc}</span>;
                })}
            </div>
        </div>
    );
}

export default FabricDetailInfo;
