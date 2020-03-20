import React, { Component } from "react";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";
import { Icon } from "antd";

updated
export default class CarouselStrikingDesign extends Component {
    bestSellerContent = () => {
        const { bestSellerInfo } = this.props;
        return bestSellerInfo.map((product, index) => {
            return (
                <div key={index} className="content-carousel">
                    <div className="image">
                        <img src={product.image} atl={product.name} />
                    </div>
                    <div className="end-carousel">
                        <div className="title">{product.name}</div>
                        <div className="button d-flex justify-content-between align-items-center">
                            <div className="col-6 d-flex flex-row justify-content-center align-items-center">
                                <span className="titleButton">
                                    {product.totalSupportedFabric + ' mẫu vãi'}
                                </span>
                            </div>
                            <div className="col-6">
                                <Link
                                    style={{
                                        width: "100%",
                                        height: "100%"
                                    }}
                                    to={{
                                        pathname: "/product-detail",
                                        search: `?id=${product.designID}&pattern=${product.fabricID}`
                                    }}
                                >
                                    <div className="putButton d-flex flex-row justify-content-center align-items-center">
                                        <span>Đặt may</span>
                                        <Icon type="right" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
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
        return this.props.bestSellerInfo.length > 0 ? (
            <div className="carousel-wraper">
                <Swiper {...params}>{this.bestSellerContent()}</Swiper>
            </div>
        ) : (
            false
        );
    }
}
