import React, { Component } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import iconVectorRight from "../../.../../../../assets/imageHomePage/vectorRight.svg";
import imageCollectionDamCongSo from "../../../../assets/imageHomePageDesktop/collection-dam-cong-so.jpg";
import imageCollectionDamDaoPho from "../../../../assets/imageHomePageDesktop/collection-dam-dao-pho.jpg";
import imageCollectionDamDuTiec from "../../../../assets/imageHomePageDesktop/collection-dam-du-tiec.jpg";
import { getCurrentDate } from "services/CommonFunction";
import { trackingIncrement } from "services/Fundamental";

export default class Collections extends Component {
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

    render() {
        return (
            <div className="collection_wrapper d-flex fontMontserrat">
                <div className="collection d-flex flex-column justify-content-center">
                    <span>Bộ Sưu Tập</span>
                    <svg
                        width="13.75vw"
                        height="17.59vw"
                        viewBox="0 0 198 253"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0.5 0.5L197 252" stroke="#111E6C" />
                    </svg>

                    <span>
                        Khám phá ngay
                        <br /> những bộ sưu tập
                        <br /> mới nhất từ nhà may.
                    </span>
                </div>
                <div className="selectionCollection d-flex">
                    <Link
                        to={{
                            pathname: "/shopping-store",
                            search: "?cat=damcongso&search",
                        }}
                        onClick={() => this.handleTracking("damcongso")}
                    >
                        <div className="selection d-flex">
                            <div className="image">
                                {/* <img src={imageCollectionDamDaoPho} alt="" /> */}
                                <LazyLoadImage
                                    alt="dam-cong-so"
                                    effect="blur"
                                    src={imageCollectionDamCongSo}
                                />
                            </div>
                            <div className="title d-flex flex-column align-items-center">
                                <span>
                                    Đầm<br></br> Công Sở
                                </span>
                                <span>
                                    XEM NGAY{" "}
                                    <img src={iconVectorRight} alt="" />
                                </span>
                            </div>
                        </div>
                    </Link>
                    <Link
                        to={{
                            pathname: "/shopping-store",
                            search: "?cat=damdaopho&search",
                        }}
                        onClick={() => this.handleTracking("damdaopho")}
                    >
                        <div
                            className="selection d-flex"
                            style={{
                                marginLeft: "1.66vw",
                                marginRight: "1.66vw",
                            }}
                        >
                            <div className="image">
                                {/* <img src={imageCollectionDamCongSo} alt="" /> */}
                                <LazyLoadImage
                                    alt="dam-dao-pho"
                                    effect="blur"
                                    src={imageCollectionDamDaoPho}
                                />
                            </div>
                            <div className="title d-flex flex-column align-items-center">
                                <span>
                                    Đầm <br></br> Dạo Phố
                                </span>
                                <span>
                                    XEM NGAY{" "}
                                    <img src={iconVectorRight} alt="" />
                                </span>
                            </div>
                        </div>
                    </Link>
                    <Link
                        to={{
                            pathname: "/shopping-store",
                            search: "?cat=damdutiec&search",
                        }}
                        onClick={() => this.handleTracking("damdutiec")}
                    >
                        <div className="selection d-flex">
                            <div className="image">
                                {/* <img src={imageCollectionDamDuTiec} alt="" /> */}
                                <LazyLoadImage
                                    alt="dam-du-tiec"
                                    effect="blur"
                                    src={imageCollectionDamDuTiec}
                                />
                            </div>
                            <div className="title d-flex flex-column align-items-center">
                                <span>
                                    Đầm <br></br> Dự Tiệc
                                </span>
                                <span>
                                    XEM NGAY{" "}
                                    <img src={iconVectorRight} alt="" />
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}
