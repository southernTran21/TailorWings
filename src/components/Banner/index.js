import React from "react";
import Slider from "react-slick";
import loader from "assets/Image/image-loader.gif";
import PropTypes from "prop-types";
import ReactImageAppear from "react-image-appear";

Banner.propTypes = {
    isSlide: PropTypes.bool,
    banners: PropTypes.array,
};

Banner.defaultProps = {
    isSlide: false,
    banners: [""],
};

function Banner(props) {
    /*--------------*/
    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };
    /*--------------*/
    if (props.isSlide) {
        return (
            <div className="c-banner">
                <Slider {...settings}>
                    {props.banners.map((banner, index) => {
                        return (
                            <div  key={index}>
                                <ReactImageAppear
                                    className="c-banner__banner-item"
                                    src={banner || ""}
                                    animationDuration="1s"
                                    loader={loader}
                                    loaderStyle={{
                                        backgroundColor: "transparent",
                                    }}
                                    placeholderStyle={{
                                        backgroundColor: "transparent",
                                    }}
                                />
                            </div>
                        );
                    })}
                </Slider>
            </div>
        );
    } else {
        return (
            <div className="c-banner">
                <img
                    src={props.banners[0]}
                    alt="image"
                    className="c-banner__image"
                />
            </div>
        );
    }
}

export default Banner;
