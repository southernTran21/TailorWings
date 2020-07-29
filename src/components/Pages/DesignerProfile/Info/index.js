import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Stars from "components/Stars";
import locationIcon from "../../../../assets/Icon/location.svg";
import tagIcon from "../../../../assets/Icon/tag.svg";

DesignerInfo.propTypes = {
    info: PropTypes.object,
};

DesignerInfo.defaultProps = {
    info: null,
};

function DesignerInfo(props) {
    if (!props.info) return <Fragment />;

    const { starNumber, name, description, address, designNumber } = props.info;
    return (
        <div className="c-designer-info">
            <Stars number={starNumber} />
            <span className="c-designer-info__name">{name}</span>
            <p className="c-designer-info__desc">{description}</p>
            <div className="c-designer-info__wrapper">
                <div className="c-designer-info__location">
                    <img
                        src={locationIcon}
                        alt="location"
                        className="c-designer-info__icon"
                    />
                    <span className="c-designer-info__text">{address}</span>
                </div>
                <div className="c-designer__design-number">
                    <img
                        src={tagIcon}
                        alt="design-number"
                        className="c-designer-info__icon"
                    />
                    <span className="c-designer-info__text">
                        ${designNumber} Thiết Kế
                    </span>
                </div>
            </div>
        </div>
    );
}

export default DesignerInfo;
