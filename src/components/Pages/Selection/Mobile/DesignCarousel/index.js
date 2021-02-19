import loader from "assets/Image/image-loader.gif";
import PropTypes from "prop-types";
import React, { Fragment, useRef } from "react";
import ReactImageAppear from "react-image-appear";
import { Swiper, SwiperSlide } from "swiper/react";
import classNames from "classnames";

SelectionDesignCarousel.propTypes = {
    images: PropTypes.array,
    id: PropTypes.string,
    isImageLoading: PropTypes.bool,
    renderFabricTypes: PropTypes.array,
    onFabricTypeChange: PropTypes.func,
    selectedFabricType: PropTypes.object,
};

SelectionDesignCarousel.defaultProps = {
    images: null,
    id: "",
    isImageLoading: false,
    renderFabricTypes: [],
    onFabricTypeChange: null,
    selectedFabricType: null,
};

function SelectionDesignCarousel(props) {
    /*--------------*/
    const swiperRef = useRef(null);
    /*--------------*/
    /*********************************
     *  Description: handle slide move
     *
     *
     *  Call by:
     */
    function onSlide(isNext) {
        if (swiperRef.current) {
            if (isNext) {
                swiperRef.current.swiper.slideNext();
            } else {
                swiperRef.current.swiper.slidePrev();
            }
        }
    }
    /************_END_****************/
    /*--------------*/
    if (
        typeof props.images !== "object" ||
        !props.renderFabricTypes.length > 0 ||
        !props.selectedFabricType ||
        !props.onFabricTypeChange
    )
        return <div className="c-design-carousel"></div>;
    /*--------------*/
    const { T, C, S } = props.images;
    let renderImages = [T, C, S];
    /*--------------*/
    return (
        <div className="c-design-carousel">
            <Swiper
                ref={swiperRef}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
            >
                {renderImages.map((image, index) => {
                    return (
                        <SwiperSlide key={index}>
                            {props.isImageLoading ? (
                                <Fragment />
                            ) : (
                                <ReactImageAppear
                                    src={image || ""}
                                    animationDuration="1s"
                                    loader={loader}
                                    loaderStyle={{
                                        backgroundColor: "transparent",
                                    }}
                                    placeholderStyle={{
                                        backgroundColor: "transparent",
                                    }}
                                    className="c-design-carousel__image"
                                />
                            )}
                        </SwiperSlide>
                    );
                })}
                <div
                    class="swiper-button-next"
                    name="next"
                    onClick={() => onSlide(true)}
                >
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div
                    class="swiper-button-prev"
                    name="prev"
                    onClick={() => onSlide(false)}
                >
                    <i class="fas fa-chevron-left"></i>
                </div>
            </Swiper>
            <ul className="c-design-carousel__fabric-type-wrapper">
                {props.renderFabricTypes.length > 0 ? (
                    props.renderFabricTypes.map((type, index) => {
                        if (typeof type === "object") {
                            /*--------------*/
                            return (
                                <li
                                    className={classNames(
                                        "c-design-carousel__fabric-type",
                                        {
                                            "c-design-carousel__fabric-type--active":
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

export default SelectionDesignCarousel;
