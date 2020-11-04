import PropTypes from "prop-types";
import React, { Fragment } from "react";
import ReactImageAppear from "react-image-appear";
import loader from "assets/Image/image-loader.gif";
import classNames from "classnames";

DesignCarouselDesktop.propTypes = {
    images: PropTypes.object,
    id: PropTypes.string,
    isImageLoading: PropTypes.bool,
    renderFabricTypes: PropTypes.array,
    onFabricTypeChange: PropTypes.func,
    selectedFabricType: PropTypes.object,
};

DesignCarouselDesktop.defaultProps = {
    images: null,
    id: "",
    isImageLoading: false,
    renderFabricTypes: [],
    onFabricTypeChange: null,
    selectedFabricType: null,
};

function DesignCarouselDesktop(props) {
    if (
        !props.images ||
        !props.renderFabricTypes.length > 0 ||
        !props.selectedFabricType ||
        !props.onFabricTypeChange
    )
        return (
            <div className="c-design-carousel-desktop">
                <div className="c-design-carousel-desktop--left">
                    <div className="c-design-carousel-desktop--top"></div>
                    <div className="c-design-carousel-desktop--bottom"></div>
                </div>
                <div className="c-design-carousel-desktop--right"></div>
                <ul className="c-design-carousel-desktop__fabric-type-wrapper"></ul>
            </div>
        );
    return (
        <div className="c-design-carousel-desktop">
            <div className="c-design-carousel-desktop--left">
                <div className="c-design-carousel-desktop--top">
                    {props.isImageLoading ? (
                        <Fragment />
                    ) : (
                        <ReactImageAppear
                            src={
                                typeof props.images === "object"
                                    ? props.images.C
                                    : ""
                            }
                            animationDuration="1s"
                            loader={loader}
                            loaderStyle={{ backgroundColor: "transparent" }}
                            placeholderStyle={{
                                backgroundColor: "transparent",
                            }}
                        />
                    )}
                </div>
                <div className="c-design-carousel-desktop--bottom">
                    {props.isImageLoading ? (
                        <Fragment />
                    ) : (
                        <ReactImageAppear
                            src={
                                typeof props.images === "object"
                                    ? props.images.S
                                    : ""
                            }
                            animationDuration="1s"
                            loader={loader}
                            loaderStyle={{ backgroundColor: "transparent" }}
                            placeholderStyle={{
                                backgroundColor: "transparent",
                            }}
                        />
                    )}
                </div>
            </div>
            <div className="c-design-carousel-desktop--right">
                {props.isImageLoading ? (
                    <Fragment />
                ) : (
                    <ReactImageAppear
                        src={
                            typeof props.images === "object"
                                ? props.images.T
                                : ""
                        }
                        animationDuration="1s"
                        loader={loader}
                        loaderStyle={{ backgroundColor: "transparent" }}
                        placeholderStyle={{ backgroundColor: "transparent" }}
                    />
                )}
            </div>
            <ul className="c-design-carousel-desktop__fabric-type-wrapper">
                {props.renderFabricTypes.length > 0 ? (
                    props.renderFabricTypes.map((type, index) => {
                        if (typeof type === "object") {
                            /*--------------*/
                            return (
                                <li
                                    className={classNames(
                                        "c-design-carousel-desktop__fabric-type",
                                        {
                                            "c-design-carousel-desktop__fabric-type--active":
                                                props.selectedFabricType.id ===
                                                type.id,
                                        }
                                    )}
                                    key={index}
                                    onClick={() =>
                                        props.onFabricTypeChange(type)
                                    }
                                >
                                    {type.name}
                                </li>
                            );
                            /*--------------*/
                        } else {
                            return <Fragment />;
                        }
                    })
                ) : (
                    <Fragment />
                )}
            </ul>
        </div>
    );
}

export default DesignCarouselDesktop;
