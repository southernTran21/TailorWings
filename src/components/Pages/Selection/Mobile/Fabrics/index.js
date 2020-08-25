import PropTypes from "prop-types";
import React, { useRef, Fragment } from "react";
import Swiper from "react-id-swiper";
import FabricItem from "./FabricItem";

SelectionFabrics.propTypes = {
    renderFabrics: PropTypes.array,
    activeIndex: PropTypes.number,
};

SelectionFabrics.defaultProps = {
    renderFabrics: null,
    activeIndex: null,
};

function SelectionFabrics(props) {
    /*--------------*/
    const ref = useRef(null);
    /*--------------*/
    if (
        !props.renderFabrics ||
        !props.renderFabrics.length > 0 ||
        props.activeIndex == null
    )
        return <Fragment />;

    let modifiedRenderFabrics = [...props.renderFabrics];
    modifiedRenderFabrics.unshift("");
    const params = {
        slidesPerView: "auto",
        slideToClickedSlide: true,
        initialSlide: props.activeIndex,
    };

    return (
        <div className="c-selection-fabrics">
            <div className="c-selection-fabrics__pagination">
                <span>
                    {props.activeIndex + 1 + "/" + props.renderFabrics.length}
                </span>
            </div>
            <div className="c-selection-fabrics__list">
                <Swiper {...params} ref={ref}>
                    {modifiedRenderFabrics.map((fabric, index) => {
                        return (
                            <div key={index}>
                                <FabricItem
                                    fabricInfo={fabric}
                                    currentIndex={index}
                                />
                            </div>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}

export default SelectionFabrics;
