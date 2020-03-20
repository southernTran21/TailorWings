import React, { Component } from "react";

import iconVectorRight from "../../.../../../../assets/imageHomePage/vectorRight.svg";
import imageCollection from "../../.../../../../assets/imageHomePage/imageBST.jpg";

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
                                strokeWidth: "1.2"
                            }}
                        />
                    </svg>
                    <span>
                        Khám phá ngay những bộ sưu tập mới nhất từ nhà may.
                    </span>
                </div>
                <div className="selectionCollection d-flex">
                    <div className="selection d-flex">
                        <div className="image">
                            <img src={imageCollection} alt="" />
                        </div>
                        <div className="title d-flex flex-column align-items-center">
                            <span>
                                Đầm<br></br> Dạo Phố
                            </span>
                            <span>
                                XEM NGAY <img src={iconVectorRight} alt="" />
                            </span>
                        </div>
                    </div>
                    <div
                        className="selection d-flex"
                        style={{
                            marginLeft: "1.66vw",
                            marginRight: "1.66vw"
                        }}
                    >
                        <div className="image">
                            <img src={imageCollection} alt="" />
                        </div>
                        <div className="title d-flex flex-column align-items-center">
                            <span>
                                Đầm <br></br> Công Sở
                            </span>
                            <span>
                                XEM NGAY <img src={iconVectorRight} alt="" />
                            </span>
                        </div>
                    </div>
                    <div className="selection d-flex">
                        <div className="image">
                            <img src={imageCollection} alt="" />
                        </div>
                        <div className="title d-flex flex-column align-items-center">
                            <span>
                                Đầm <br></br> Dự Tiệc
                            </span>
                            <span>
                                XEM NGAY <img src={iconVectorRight} alt="" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}