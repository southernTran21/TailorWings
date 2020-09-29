import PropTypes from "prop-types";
import React, { Fragment } from "react";
import ReactImageAppear from "react-image-appear";
import loader from "assets/Image/image-loader.gif";

DesignCarouselDesktop.propTypes = {
    images: PropTypes.array,
    id: PropTypes.string,
    isImageLoading: PropTypes.bool,
};

DesignCarouselDesktop.defaultProps = {
    images: null,
    id: "",
    isImageLoading: false,
};

function DesignCarouselDesktop(props) {
    if (!props.images) return <Fragment />;
    return (
        <div className="c-design-carousel-desktop">
            <div className="c-design-carousel-desktop--left">
                <div className="c-design-carousel-desktop--top">
                    {props.isImageLoading ? (
                        <Fragment />
                    ) : (
                        <ReactImageAppear
                            src={props.images[1]}
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
                            src={props.images[2]}
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
                        src={props.images[0]}
                        animationDuration="1s"
                        loader={loader}
                        loaderStyle={{ backgroundColor: "transparent" }}
                        placeholderStyle={{ backgroundColor: "transparent" }}
                    />
                )}
            </div>
        </div>
    );
}

export default DesignCarouselDesktop;
