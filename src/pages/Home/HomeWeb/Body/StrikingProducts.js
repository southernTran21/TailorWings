import React, { Component } from "react";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";
import { Icon } from "antd";

export default class StrikingProducts extends Component {
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

    bestSellerContent = () => {
        let { bestSellerInfo } = this.props;
        return bestSellerInfo.map((product, index) => {
            return (
                <div key={index} className="content-carousel">
                    <Link
                        to={{
                            pathname: "/product-detail",
                            search: `?id=${product.designID}&pattern=${product.fabricID}`
                        }}
                        style={{
                            width: "100%",
                            height: "100%",
                            textDecoration: "none",
                            border: "none"
                        }}
                    >
                        <div className="image">
                            <img src={product.image} atl={product.name} />
                        </div>
                        <div className="end-carousel">
                            <div className="title d-flex flex-row justify-content-center align-items-center">
                                {product.name}
                            </div>
                            <div className="button d-flex justify-content-center align-items-center">
                                <span className="titleButton">
                                    {/* {product.totalSupportedFabric + " mẫu vãi"} */}
                                    24 mau vai
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            );
        });
    };
    render() {
        const params = {
            slidesPerView: "auto",
            spaceBetween: 0,
            centeredSlides: true,
            loop: true
        };
        const { bestSellerInfo } = this.props;
        return (
            <div className="strikingProducts d-flex flex-column align-items-center fontMontserrat">
                <div className="title">
                    <span>Nổi bật trong tuần</span>
                </div>
                <div className="carousel-wraper d-flex align-items-center">
                    <div
                        className="iconLeft"
                        onClick={() => this.onSlide("prev")}
                    >
                        <Icon type="left" />
                    </div>
                    <div className="carouselStriking">
                        {bestSellerInfo.length > 0 ? (
                            <Swiper
                                {...params}
                                className="d-flex flex-column align-items-center"
                                getSwiper={this.getSwiper.bind(this)}
                            >
                                {this.bestSellerContent()}
                            </Swiper>
                        ) : (
                            ""
                        )}
                    </div>
                    <div
                        className="iconRight"
                        onClick={() => this.onSlide("next")}
                    >
                        <Icon type="right" />
                    </div>
                </div>
                <div className="button">
                    <span>XEM TẤT CẢ</span>
                </div>
            </div>
        );
    }
}
