import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";
import loader from "assets/Image/image-loader.gif";
import ReactImageAppear from "react-image-appear";

FabricItem.propTypes = {
    fabricInfo: PropTypes.object,
    currentIndex: PropTypes.number,
};

FabricItem.propTypes = {
    fabricInfo: null,
    currentIndex: null,
};

function FabricItem(props) {
    if (!props.fabricInfo || !props.currentIndex) return <Fragment />;
    const { typeName, image, id, isActive } = props.fabricInfo;
    const designID =
        window.location.search.match(/id=(.*)\b/)[1].substring(0, 4) || "";
    return (
        <div
            className={classNames("c-selection-item", {
                "c-selection-item--active": isActive,
            })}
        >
            <span className="c-selection-item__type">{typeName || "_"}</span>
            <Link
                to={{
                    pathname: "/selection",
                    search: `?id=${designID}${id}`,
                }}
            >
                <div className="c-selection-item__image">
                    <ReactImageAppear
                        src={image[1]}
                        animationDuration="1s"
                        loader={loader}
                        loaderStyle={{ backgroundColor: "transparent" }}
                        placeholderStyle={{
                            backgroundColor: "transparent",
                        }}
                    />
                </div>
            </Link>
        </div>
    );
}

export default FabricItem;
