import React from "react";
import PropTypes from "prop-types";
import ButtonCTA from "components/Button/CTA";

CollectionItem.propTypes = {};

function CollectionItem(props) {
    return (
        <div className="c-collection-item">
            <div className="c-collection-item__image">
                <img src="" alt="" />
            </div>
            <span className="c-collection-item__name"></span>
            <p className="c-collection-item__desc"></p>
            <ButtonCTA text="XEM THÊM" />
        </div>
    );
}

export default CollectionItem;
