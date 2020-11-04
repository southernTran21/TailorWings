import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";
import loader from "assets/Image/image-loader.gif";
import ReactImageAppear from "react-image-appear";
import { validateYupSchema } from "formik";

FabricItem.propTypes = {
    patternInfo: PropTypes.object,
    isActive: PropTypes.bool,
    designID: PropTypes.string,
    patternID: PropTypes.string,
};

FabricItem.propTypes = {
    patternInfo: null,
    isActive: false,
    designID: null,
    patternID: null
};

function FabricItem(props) {
    /*--------------*/
    if (!props.patternInfo || !props.patternID || !props.designID)
        return <Fragment />;
    /*--------------*/
    const { image, id } = props.patternInfo;
    /*--------------*/
    let renderImage =
        typeof image === "object" ? (image.normal ? image.normal : "") : "";
    /*--------------*/    
    return (
        <div
            className={classNames("c-selection-item", {
                "c-selection-item--active": props.patternID === id,
            })}
        >
            {/* <span className="c-selection-item__type">{id || "_"}</span> */}
            <Link
                to={{
                    pathname: "/selection",
                    search: `?id=${props.designID}${id}`,
                }}
            >
                <div className="c-selection-item__image">
                    <ReactImageAppear
                        src={renderImage}
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
