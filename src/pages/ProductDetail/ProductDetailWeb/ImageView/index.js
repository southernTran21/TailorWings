import React, { Component } from "react";
import { Button } from "antd";
import Swiper from "react-id-swiper";
import "./ImageView.scss";

export default class ImageView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            swiper: null
        };
    }

    getSwiper = swiper => {
        this.setState({
            swiper
        });
    };

    onSlide = type => {
        const { swiper } = this.state;
        console.log("type", type);
        switch (type) {
            case "prev":
                console.log("prev");
                swiper.slidePrev();
                break;
            case "next":
                console.log("next");
                swiper.slideNext();
                break;

            default:
                break;
        }
    };

    renderContentHandling = () => {
        const { productImages, productName } = this.props;
        let isEmpty = productImages.every(image => image === "");
        if (productImages != null && !isEmpty) {
            console.log("productImages", productImages);
            const params = {
                slidesPerView: 1,
                loop: true
            };
            return (
                <Swiper
                    className="d-flex flex-column align-items-center"
                    {...params}
                    getSwiper={this.getSwiper.bind(this)}
                >
                    {productImages.map((image, index) => {
                        return (
                            <div key={index} className="image-wraper">
                                <img src={image} alt={productName} />
                            </div>
                        );
                    })}
                </Swiper>
            );
        } else {
            return "";
        }
    };

    render() {
        console.log("this.state.swiper", this.state.swiper);
        return (
            <div className="imageView-wrapper">
                <div className="d-flex justify-content-between">
                    <Button onClick={() => this.props.onImageView(false)}>
                        Back
                    </Button>
                    <Button onClick={() => this.onSlide("next")}>next</Button>
                    <Button onClick={() => this.onSlide("prev")}>prev</Button>
                </div>
                <div className="swiper">{this.renderContentHandling()}</div>
            </div>
        );
    }
}