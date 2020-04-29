import React, { Component } from "react";
import Slider from "react-slick";

export default class ProductModal extends Component {
    render() {
        const { modalImages } = this.props;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        };
        return (
            <div id="myModal" className="modal">
                <div
                    className="d-flex flex-column justify-content-center align-items-end"
                    style={{ width: "100vw", height: "10vh" }}
                >
                    <span
                        className="closeModal"
                        onClick={() => window.history.back()}
                    >
                        &times;
                    </span>
                </div>
                <Slider {...settings}>
                    {modalImages.map((image, index) => {
                        return (
                            <div key={index} className="image-wrapper">
                                <img
                                    key={index}
                                    className="modal-content"
                                    id="img01"
                                    src={image}
                                />
                            </div>
                        );
                    })}
                </Slider>
                <div id="caption" style={{ width: "100vw", height: "10vh" }} />
            </div>
        );
    }
}
