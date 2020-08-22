import React, { Fragment, useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import FabricItem from "./FabricItem";
import Slider from "react-slick";

SelectionFabrics.propTypes = {
    renderFabrics: PropTypes.array,
    activeIndex: PropTypes.number,
};

SelectionFabrics.defaultProps = {
    renderFabrics: null,
    activeIndex: 0,
};

function SelectionFabrics(props) {
    /*--------------*/
    const ref = useRef(null);
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        if (props.renderFabrics.length > 0 && props.activeIndex > -1 && ref) {
            setTimeout(() => {
                ref.current.slickGoTo(props.activeIndex);
            }, 500);
        }
    }, [props.activeIndex]);
    /*--------------*/
    if (!props.renderFabrics) return <Fragment />;
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        dots: false,
        arrows: false,
        speed: 500,
        focusOnSelect: true,
    };
    return (
        <div className="c-selection-fabrics">
            <div className="c-selection-fabrics__pagination">
                <span>
                    {props.activeIndex + 1 + "/" + props.renderFabrics.length}
                </span>
            </div>
            <div className="c-selection-fabrics__list">
                <Slider ref={ref} {...settings}>
                    {props.renderFabrics.map((fabric, index) => {
                        return (
                            <FabricItem
                                key={index}
                                fabricInfo={fabric}
                                currentIndex={index}
                            />
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default SelectionFabrics;
