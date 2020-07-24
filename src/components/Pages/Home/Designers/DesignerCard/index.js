import React from "react";
import PropTypes from "prop-types";

DesignerCard.propTypes = {};

function DesignerCard(props) {
    return (
        <div className="c-designer-card">
            <div className="c-designer-card__info-wrapper">
                <div className="c-designer-card__avatar"></div>
                <div className="c-designer-card__info">
                <span className="c-designer-card__name"></span>
                <span className="c-designer-card__address"></span>
                    <div className="c-designer-card__design-number">
                        <span></span>
                        <span>designs</span>
                    </div>
                </div>
            </div>
            <div className="c-designer-card__design-list">
                <div className="c-designer-card__design-image"></div>
                <div className="c-designer-card__design-image"></div>
                <div className="c-designer-card__design-image"></div>
                <div className="c-designer-card__remain"></div>
            </div>
        </div>
    );
}

export default DesignerCard;
