import React, { Component } from "react";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";
import { Icon } from "antd";

export default class StrikingProducts extends Component {
    bestSellerContent = () => {
        let { bestSellerInfo } = this.props;
        if (bestSellerInfo.length > 0) {
            bestSellerInfo = bestSellerInfo.concat(bestSellerInfo);
            console.log("bestSellerInfo :", bestSellerInfo);
            return bestSellerInfo.map((product, index) => {
                return (
                    <div key={index} className="content-carousel">
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
                    </div>
                );
            });
        } else {
            return "";
        }
    };
    render() {
        const params = {
            slidesPerView: "auto",
            spaceBetween: 0,
            centeredSlides: true,
            loop: true
        };
        return (
            <div className="strikingProducts d-flex flex-column align-items-center fontMontserrat">
                <div className="title">
                    <span>Nổi bật trong tuần</span>
                </div>
                <div className="carousel-wraper d-flex align-items-center">
                    <div className="iconLeft">
                        <Icon type="left" />
                    </div>
                    <div className="carouselStriking">
                        <Swiper {...params} className='d-flex flex-column align-items-center'>{this.bestSellerContent()}</Swiper>
                    </div>
                    <div className="iconRight">
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
