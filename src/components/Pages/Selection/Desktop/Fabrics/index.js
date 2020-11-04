import loader from "assets/Image/image-loader.gif";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import ReactImageAppear from "react-image-appear";
import { Link } from "react-router-dom";

FabricDesktop.propTypes = {
    renderPatterns: PropTypes.array,
    patternID: PropTypes.string,
    designID: PropTypes.string,
};

FabricDesktop.defaultProps = {
    renderPatterns: [],
    patternID: null,
    designID: null,
};

function FabricDesktop(props) {
    /*--------------*/
    if (!props.renderPatterns.length > 0 || !props.patternID || !props.designID)
        return <div className="c-fabric-desktop"></div>;
    return (
        <div className="c-fabric-desktop">
            {props.renderPatterns.map((result, index) => {
                if (result) {
                    /*--------------*/
                    let search = props.designID
                        ? `?id=${props.designID}${result.id}`
                        : "";
                    /*--------------*/
                    let patternImage =
                        typeof result.image === "object"
                            ? result.image.normal
                                ? result.image.normal
                                : ""
                            : "";
                    /*--------------*/
                    return (
                        <Link
                            to={{
                                pathname: "/selection",
                                search: search,
                            }}
                        >
                            <div
                                className={classNames("c-fabric-desktop-item", {
                                    "c-fabric-desktop-item--active":
                                        result.id === props.patternID,
                                })}
                                key={index}
                            >
                                <ReactImageAppear
                                    src={patternImage}
                                    animationDuration="1s"
                                    loader={loader}
                                    loaderStyle={{
                                        backgroundColor: "transparent",
                                    }}
                                    placeholderStyle={{
                                        backgroundColor: "transparent",
                                    }}
                                />
                            </div>
                        </Link>
                    );
                } else {
                    return <div className="c-fabric-desktop-item"></div>;
                }
            })}
        </div>
    );
}

export default FabricDesktop;
