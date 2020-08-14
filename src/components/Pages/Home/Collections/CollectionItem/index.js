import ButtonCTA from "components/Button/CTA";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

CollectionItem.propTypes = {
    collectionInfo: PropTypes.object,
};

CollectionItem.defaultProps = {
    collectionInfo: null,
};

function CollectionItem(props) {
    if (!props.collectionInfo) return <Fragment />;
    const { id, name, image, desc } = props.collectionInfo;
    return (
        <Link
            to={{
                pathname: "/designs",
                search: `?col=${id}`,
            }}
        >
            <div className="c-collection-item">
                <div className="c-collection-item__image">
                    <img src={image} alt={id} />
                </div>
                <span className="c-collection-item__name">{name}</span>
                <p className="c-collection-item__desc">{desc}</p>
                <div className="c-collection-item__button">
                    <ButtonCTA text="XEM THÊM" />
                </div>
            </div>
        </Link>
    );
}

export default CollectionItem;
