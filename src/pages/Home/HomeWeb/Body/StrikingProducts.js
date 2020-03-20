import React, { Component } from "react";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";
import { Icon } from "antd";

export default class StrikingProducts extends Component {
    bestSellerContent = () => {
        let { bestSellerInfo } = this.props;
        if (bestSellerInfo.length > 0) {
            bestSellerInfo = bestSellerInfo.concat(bestSellerInfo)
            console.log('bestSellerInfo :', bestSellerInfo);
            return bestSellerInfo.map((product, index) => {
                return (
                    <div key={index} className="content-carousel">
                        <div className="image">
                            <img src={product.image} atl={product.name} />
                        </div>
                        <div className="end-carousel">
                            <div className="title d-flex flex-row justify-content-center align-items-center">{product.name}</div>
                            <div className="button d-flex justify-content-between align-items-center">
                                <div className="d-flex flex-row justify-content-center align-items-center">
                                    <span className="titleButton">
                                        {product.totalSupportedFabric +
                                            " mẫu vãi"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });
        }
        else{
            return ''
        }
    };
    render() {
        const params = {
            slidesPerView: "auto",
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        };
        return (
            <div className="strikingProducts d-flex flex-column align-items-center fontMontserrat">
                <div className="title">
                    <span>Nổi bật trong tuần</span>
                </div>
                <div className="carousel-wraper">
                    <Swiper {...params}>{this.bestSellerContent()}</Swiper>
                </div>
                <div className='button'>
                    <span>XEM TẤT CẢ</span>
                </div>
            </div>
        );
    }
}
