import React from "react";
import PropTypes from "prop-types";

DesignItem.propTypes = {
    design: PropTypes.object,
};

DesignItem.defaultProps = {
    design: null,
};

function DesignItem(props) {
    if (!props.design) return "";

    const { image, designerName, fabricNumber, name } = props.design;
    return (
        <li className="c-design-item">
            <div className="c-design-item__image">
                <img src={image} alt={name} />
            </div>
            <span className="c-design-item__designed-by">Thiết kế bởi</span>
            <span className="c-design-item__designer-name">{designerName}</span>
            <div className="c-design-item__fabric-number">
                <span>{fabricNumber} Mẫu Vải</span>
            </div>
        </li>
    );
}

export default DesignItem;
