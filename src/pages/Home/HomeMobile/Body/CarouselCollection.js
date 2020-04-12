import React, { Component } from "react";
import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";
import { Icon } from "antd";

import BST1 from "../../../../assets/imageHomePage/imageBST.jpg";
import BST2 from "../../../../assets/imageHomePage/Prairie Pijama.jpg";

export default class CarouselCollection extends Component {
    AutoSlidesPerView = () => {
        let { collectionsInfo } = this.props;
        const params = {
            slidesPerView: "auto",
            spaceBetween: 20,
            loop: true,
        };
        if (collectionsInfo == null) {
            collectionsInfo = [];
        }
        return collectionsInfo.length > 0 ? (
            <Swiper {...params}>
                {collectionsInfo.map((collection, index) => {
                    return (
                        <div key={index} className="content-carousel">
                            <div className="title">{collection.name}</div>
                            <div className="image">
                                <Link
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                    }}
                                    to={{
                                        pathname: "/shopping-store",
                                        search: `?cat=${collection.id}&search=`,
                                    }}
                                >
                                    <div className="popupImage">{`${collection.products.length} thiết kế`}</div>
                                    <img src={BST1} />
                                </Link>
                            </div>
                            <div className="end-carousel">
                                <Link
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                    }}
                                    to={{
                                        pathname: "/shopping-store",
                                        search: `?cat=${collection.id}&search=`,
                                    }}
                                >
                                    <div className="button d-flex align-items-center justify-content-center">
                                        <span className="titleButton">
                                            CHỌN MẪU
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </Swiper>
        ) : (
            ""
        );
    };
    render() {
        return (
            <div className="carousel-wraper">{this.AutoSlidesPerView()}</div>
        );
    }
}
