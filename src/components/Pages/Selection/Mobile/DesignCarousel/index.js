import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactIdSwiper from "react-id-swiper";
import { useRef } from "react";

SelectionDesignCarousel.propTypes = {
    images: PropTypes.array,
    id: PropTypes.func,
};

SelectionDesignCarousel.defaultProps = {
    images: null,
    id: "",
};

function SelectionDesignCarousel(props) {
    /*--------------*/
    const swiperRef = useRef(null);
    /*--------------*/
    /*********************************
     *  Description:
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
                            <img
                                className="c-design-carousel__image"
                                src={image}
                                alt={props.id}
                            />
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
