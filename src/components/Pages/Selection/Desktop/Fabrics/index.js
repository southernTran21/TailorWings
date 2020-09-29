import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import loader from "assets/Image/image-loader.gif";
import ReactImageAppear from "react-image-appear";

FabricDesktop.propTypes = {
    renderFabrics: PropTypes.array,
    activeIndex: PropTypes.number,
    designID: PropTypes.string,
};

FabricDesktop.defaultProps = {
    renderFabrics: null,
    activeIndex: null,
    designID: null,
};

function FabricDesktop(props) {
    /*--------------*/

    /*--------------*/
    if (!props.renderFabrics || props.activeIndex < 0)
        return <div className="c-fabric-desktop"></div>;
    return (
        <div className="c-fabric-desktop">
            {props.renderFabrics.map((result, index) => {
                let search = props.designID
                    ? `?id=${props.designID}${result.id}`
                    : "";
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
                                    props.activeIndex === index,
                            })}
                            key={index}
                        >
                            <ReactImageAppear
                                src={result.image[0]}
                                animationDuration="1s"
                                loader={loader}
                                loaderStyle={{ backgroundColor: "transparent" }}
                                placeholderStyle={{
                                    backgroundColor: "transparent",
                                }}
                            />
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default FabricDesktop;
