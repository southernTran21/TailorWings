import React, { Component } from "react";
import { Link } from "react-router-dom";
import imageWelcome from "../../.../../../../assets/imageHomePageDesktop/banner-homepage.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Input } from 'antd'

import titleBanner from "../../../../assets/imageLandingPageWelcomeDesktop/titleBanner.png";
import Models from "../../../../assets/imageLandingPageWelcomeDesktop/Models.jpg";

export default class Banner extends Component {
    render() {
        return (
            <div className="bannerLandingPage d-flex">
                {/* <div className="imageBanner d-flex justify-content-center">
                    <Link
                        to={{
                            pathname: "/shopping-store",
                            search: "?cat=all&search",
                        }}
                    >
                        <img src={imageWelcome} alt="imageWelcome" />
                        <LazyLoadImage
                            alt="imageWelcome"
                            effect="blur"
                            src={imageWelcome}
                        />
                    </Link>
                </div> */}
                <div className="image_wrapper">
                    <img src={Models} alt="" />
                </div>
                <div className="contentBanner_wrapper d-flex flex-column align-content-center">
                    <div className="title1">
                        <img src={titleBanner} alt="" />
                    </div>
                    <div className="title2 d-flex align-items-center justify-content-center text-center">
                        <span>
                            Đầm Thiết Kế May Theo Số Đo Của
                            <br /> Bạn Giá Chỉ Từ 500K
                        </span>
                    </div>
                    <div className="title3 d-flex justify-content-center">
                        <span>
                            ĐĂNG KÝ ĐỂ NHẬN NGAY PHIẾU MUA HÀNG{" "}
                            <span className="text-underline">
                                TRỊ GIÁ 168.000đ
                            </span>
                        </span>
                    </div>
                    <div className="formInput_wrapper d-flex flex-column align-items-center">
                        <div className="formInput">
                            <div className="d-flex justify-content-between">
                                <div className="inputName">
                                    <Input placeholder="Họ Tên" />
                                </div>
                                <div className="inputPhoneNumber">
                                    <Input placeholder="Số Điện Thoại" />
                                </div>
                            </div>
                            <div className="inputEmail">
                                <Input placeholder="Email" />
                            </div>
                        </div>
                        <div className="buttonAcceptForm_wrapper">
                            <span className="buttonAcceptForm d-flex justify-content-center align-items-center">
                                NHẬN QUÀ NGAY
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
