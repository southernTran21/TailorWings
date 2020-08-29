import React, { Fragment } from "react";
import PropTypes from "prop-types";

DesignCarouselDesktop.propTypes = {
    images: PropTypes.array,
    id: PropTypes.string,
};

DesignCarouselDesktop.defaultProps = {
    images: null,
    id: "",
};

function DesignCarouselDesktop(props) {
    if (!props.images) return <Fragment />;
    return (
        <div className="c-design-carousel-desktop">
            <div className="c-design-carousel-desktop--left">
                <div className="c-design-carousel-desktop--top">
                    <img src={props.images[1]} alt={props.id} />
                </div>
                <div className="c-design-carousel-desktop--bottom">
                    <img src={props.images[2]} alt={props.id} />
                </div>
            </div>
            <div className="c-design-carousel-desktop--right">
                <img src={props.images[0]} alt={props.id} />
            </div>
        </div>
    );
}

export default DesignCarouselDesktop;
