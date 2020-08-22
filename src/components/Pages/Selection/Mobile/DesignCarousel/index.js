import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

SelectionDesignCarousel.propTypes = {
    renderProduct: PropTypes.object,
};

SelectionDesignCarousel.defaultProps = {
    renderProduct: null,
};

function SelectionDesignCarousel(props) {
    /*--------------*/
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0
    };
    /*--------------*/
    if (!props.renderProduct) return <Fragment />;
    return (
        <div className="c-design-carousel">
            <Slider {...settings}>
                {props.renderProduct.image.map((image, index) => {
                    return (
                        <img
                            className="c-design-carousel__image"
                            key={index}
                            src={image}
                            alt={props.renderProduct.productID}
                        />
                    );
                })}
            </Slider>
            {/* <img src="https://via.placeholder.com/680x800" alt="" /> */}
        </div>
    );
}

export default SelectionDesignCarousel;
