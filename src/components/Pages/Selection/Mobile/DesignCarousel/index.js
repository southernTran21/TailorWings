import loader from "assets/Image/image-loader.gif";
import PropTypes from "prop-types";
import React, { Fragment, useRef } from "react";
import ReactImageAppear from "react-image-appear";
import { Swiper, SwiperSlide } from "swiper/react";

SelectionDesignCarousel.propTypes = {
    images: PropTypes.array,
    id: PropTypes.func,
    isImageLoading: PropTypes.bool,
};

SelectionDesignCarousel.defaultProps = {
    images: null,
    id: "",
    isImageLoading: false,
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
    if (!props.images) return <Fragment />;
    return (
        <div className="c-design-carousel">
            <Swiper
                ref={swiperRef}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
            >
                {props.images.map((image, index) => {
                    return (
                        <SwiperSlide key={index}>
                            {props.isImageLoading ? (
                                <Fragment />
                            ) : (
                                <ReactImageAppear
                                    src={image}
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
        </div>
    );
}

export default SelectionDesignCarousel;
