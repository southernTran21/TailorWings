import React, { Component } from "react";
import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";
import {
    removePunctuation,
    getCurrentDate,
} from "../../../../services/CommonFunction";
import { trackingIncrement } from "services/Fundamental";
import { Skeleton } from "antd";

export default class CarouselStrikingDesign extends Component {
    /*********************************
     *  Description: to update tracking counter
     *
     *
     *  Call by:
     */
    handleTracking = (product) => {
        let date = getCurrentDate();
        if (!product) return;
        if (product.designID && product.fabricID) {
            trackingIncrement(
                "tracking",
                date,
                "products",
                product.designID + product.fabricID
            );
            trackingIncrement("tracking", date, "fabrics", product.fabricID);
            trackingIncrement("tracking", date, "designs", product.designID);
        }
    };
    /************_END_****************/

    bestSellerContent = () => {
        const { bestSellers } = this.props;
        return bestSellers.map((product, index) => {
            let productName = removePunctuation(product.name.toLowerCase());
            productName = productName.replace(/ /gi, "");
            return (
                <div key={index} className="content-carousel">
                    <div className="image">
                        <Link
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                            to={{
                                pathname: `/product-detail/fabric-selection/${productName}`,
                                search: `?design=${product.designID}&pattern=${product.fabricID}`,
                            }}
                            onClick={() => this.handleTracking(product)}
                        >
                            <img src={product.image} atl={product.name} />
                        </Link>
                    </div>
                    <div className="end-carousel">
                        <div className="title">{product.name}</div>
                        <div className="button d-flex justify-content-between align-items-center">
                            <div className="col-6 d-flex flex-row justify-content-center align-items-center">
                                <span className="titleButton">
                                    {product.totalSupportedFabric || 0 + " MẪU VẢI"}
                                </span>
                            </div>
                            <div className="col-6">
                                <Link
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                    }}
                                    to={{
                                        pathname: `/product-detail/fabric-selection/${productName}`,
                                        search: `?design=${product.designID}&pattern=${product.fabricID}`,
                                    }}
                                    onClick={() => this.handleTracking(product)}
                                >
                                    <div className="putButton d-flex flex-row justify-content-center align-items-center">
                                        <span>CHỌN VẢI</span>
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
            loop: true,
        };
        const { bestSellers } = this.props;
        if (!bestSellers || bestSellers.length < 1) return <Skeleton active />;

        return (
            <div className="carousel-wraper">
                <Swiper {...params}>{this.bestSellerContent()}</Swiper>
            </div>
        );
    }
}
