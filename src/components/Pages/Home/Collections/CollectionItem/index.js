import ButtonCTA from "components/Button/CTA";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import loader from "assets/Image/image-loader.gif";
import ReactImageAppear from "react-image-appear";

CollectionItem.propTypes = {
    collectionInfo: PropTypes.object,
};

CollectionItem.defaultProps = {
    collectionInfo: null,
};

function CollectionItem(props) {
    if (!props.collectionInfo) return <Fragment />;
    const { name, image, desc } = props.collectionInfo;
    return (
        <Link
            to={{
                pathname: "/designs",
                search: "?cat=all",
            }}
        >
            <div className="c-collection-item">
                <div className="c-collection-item__image">
                    <ReactImageAppear
                        src={image || ""}
                        animationDuration="1s"
                        loader={loader}
                        loaderStyle={{ backgroundColor: "transparent" }}
                        placeholderStyle={{
                            backgroundColor: "transparent",
                        }}
                    />
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
