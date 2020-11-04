import PropTypes from "prop-types";
import React, { useRef, Fragment } from "react";
import Swiper from "react-id-swiper";
import FabricItem from "./FabricItem";

SelectionFabrics.propTypes = {
    renderPatterns: PropTypes.array,
    patternID: PropTypes.string,
    designID: PropTypes.string,
};

SelectionFabrics.defaultProps = {
    renderPatterns: null,
    patternID: null,
    designID: null,
};

function SelectionFabrics(props) {
    /*--------------*/
    const ref = useRef(null);
    /*--------------*/
    if (
        !props.renderPatterns ||
        !props.renderPatterns.length > 0 ||
        !props.patternID ||
        !props.designID
    )
        return <Fragment />;
    /*--------------*/
    let modifiedRenderPatterns = [...props.renderPatterns];
    modifiedRenderPatterns.unshift("");
    /*--------------*/
    let activeIndex =
        props.renderPatterns.findIndex(
            (pattern) => pattern.id === props.patternID
        ) || 0;
    /*--------------*/
    const params = {
        slidesPerView: "auto",
        slideToClickedSlide: true,
        initialSlide: activeIndex,
    };
    /*--------------*/
    return (
        <div className="c-selection-fabrics">
            <div className="c-selection-fabrics__pagination">
                <span>
                    {activeIndex + 1 + "/" + props.renderPatterns.length}
                </span>
            </div>
            <div className="c-selection-fabrics__list">
                <Swiper {...params} ref={ref}>
                    {modifiedRenderPatterns.map((pattern, index) => {
                        return (
                            <div key={index}>
                                <FabricItem
                                    patternInfo={pattern}
                                    designID={props.designID}
                                    patternID={props.patternID}
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
