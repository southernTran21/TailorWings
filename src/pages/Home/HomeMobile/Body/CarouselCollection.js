import React, { Component } from "react";
import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";
import collectionDamCongSo from "../../../../assets/imageHomePageMobile/imgCollection_DamCongSo.jpg";
import collectionDamDaoPho from "../../../../assets/imageHomePageMobile/imgCollection_DamDaoPHo.jpg";
import collectionDamDuTiec from "../../../../assets/imageHomePageMobile/imgCollection_DamDuTiec.jpg";
import { getCurrentDate } from "services/CommonFunction";
import { trackingIncrement } from "services/Fundamental";

export default class CarouselCollection extends Component {
    /*********************************
     *  Description: to update tracking counter
     *
     *
     *  Call by:
     */
    handleTracking = (collectionID) => {
        let date = getCurrentDate();
        if (!collectionID) return;
        trackingIncrement("tracking", date, "collections", collectionID);
    };
    /************_END_****************/

    getCollectionImage = (id) => {
        let image = "";
        switch (id) {
            case "damcongso":
                image = collectionDamDaoPho;
                break;
            case "damdaopho":
                image = collectionDamCongSo;
                break;
            case "damdutiec":
                image = collectionDamDuTiec;
                break;
            default:
                break;
        }
        return image;
    };

    AutoSlidesPerView = () => {
        let { collectionsInfo } = this.props;
        const params = {
            slidesPerView: "auto",
            spaceBetween: 15,
            loop: true,
        };
        if (collectionsInfo == null) {
            collectionsInfo = [];
        }
        return collectionsInfo.length > 0 ? (
            <Swiper {...params}>
                {collectionsInfo.map((collection, index) => {
                    let imageCollection = this.getCollectionImage(
                        collection.id
                    );
                    return (
                        <div key={index} className="content-carousel">
                            <div className="title">{collection.name}</div>
                            <div className="image">
                                <Link
                                    style={{
                                        width: "fit-content",
                                        height: "fit-content",
                                    }}
                                    to={{
                                        pathname: "/shopping-store",
                                        search: `?cat=${collection.id}&search=`,
                                    }}
                                    onClick={() =>
                                        this.handleTracking(collection.id)
                                    }
                                >
                                    <div className="popupImage">{`${collection.products.length} thiết kế`}</div>
                                    <img
                                        src={imageCollection}
                                        alt={collection.id}
                                    />
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
                                    onClick={() =>
                                        this.handleTracking(collection.id)
                                    }
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
