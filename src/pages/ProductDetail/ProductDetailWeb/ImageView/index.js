import React, { Component } from "react";
import { Button, Icon } from "antd";
import Swiper from "react-id-swiper";
import "./ImageView.scss";
import Slider from "react-slick";

export default class ImageView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            swiper: null,
        };
    }

    getSwiper = (swiper) => {
        this.setState({
            swiper,
        });
    };

    onSlide = (type) => {
        const { swiper } = this.state;
        switch (type) {
            case "prev":
                swiper.slidePrev();
                break;
            case "next":
                swiper.slideNext();
                break;

            default:
                break;
        }
    };

    renderContentHandling = () => {
        const { productImages, productName } = this.props;
        let isEmpty = productImages.every((image) => image === "");
        if (productImages != null && !isEmpty) {
            return (
                <Swiper
                    className="d-flex flex-column align-items-center"
                    getSwiper={this.getSwiper.bind(this)}
                >
                    <div className="image-wrapper"></div>
                    <div className="image-wrapper"></div>
                    <div className="image-wrapper"></div>
                </Swiper>
            );
        } else {
            return "";
        }
    };

    render() {
        const { productImages, productName } = this.props;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className="imageView-wrapper">
                <div className="back-btn d-flex justify-content-end">
                    <Button
                        onClick={() => window.history.back()}
                        className="buttonBack"
                    >
                        <Icon type="close" />
                    </Button>
                </div>
                <Slider {...settings}>
                    {productImages.map((image, index) => {
                        return (
                            <div key={index} className="image-wrapper">
                                <img src={image} alt={productName} />
                            </div>
                        );
                    })}
                </Slider>
            </div>
        );
    }
}
