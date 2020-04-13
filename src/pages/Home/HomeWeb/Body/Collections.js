import React, { Component } from "react";
import { Link } from "react-router-dom";
import iconVectorRight from "../../.../../../../assets/imageHomePage/vectorRight.svg";
import imageCollectionDamDaoPho from "../../../../assets/imageHomePage/collectionDamDaoPho.jpg";
import imageCollectionDamDuTiec from "../../../../assets/imageHomePage/collectionDamDuTiec.jpg";
import imageCollectionDamCongSo from "../../../../assets/imageHomePage/collectionDamCongSo.jpg";

export default class Collections extends Component {
    render() {
        return (
            <div className="collection_wrapper d-flex fontMontserrat">
                <div className="collection d-flex flex-column justify-content-center">
                    <span>Bộ Sưu Tập</span>
                    <svg height="45.18vh" width="14.16vw">
                        <line
                            x1="0"
                            y1="0"
                            x2="14.16vw"
                            y2="45.18vh"
                            style={{
                                stroke: "#111e6c",
                                strokeWidth: "1.2",
                            }}
                        />
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
                            search: "?cat=damdaopho&search",
                        }}
                    >
                        <div className="selection d-flex">
                            <div className="image">
                                <img src={imageCollectionDamDaoPho} alt="" />
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
                    >
                        <div
                            className="selection d-flex"
                            style={{
                                marginLeft: "1.66vw",
                                marginRight: "1.66vw",
                            }}
                        >
                            <div className="image">
                                <img src={imageCollectionDamCongSo} alt="" />
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
                    >
                        <div className="selection d-flex">
                            <div className="image">
                                <img src={imageCollectionDamDuTiec} alt="" />
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
