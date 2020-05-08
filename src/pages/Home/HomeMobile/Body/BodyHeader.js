import React, { Component } from "react";
import ReactPixel from "react-facebook-pixel";
import LazyLoad from "react-lazy-load";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { Input } from "antd";
// import image Home Page
import Image1 from "../../../../assets/imageHomePage/bannerHomePageMobile.png";
import Models from "../../../../assets/imageLandingPageWelcomeMobile/Models.jpg";
import titleBanner from "../../../../assets/imageLandingPageWelcomeDesktop/titleBanner.png";

const image = {
    src: Image1,
    alt: "banner",
};
class BodyHeader extends Component {
    updatePixel = () => {
        ReactPixel.trackCustom("ShoppingStoreAccessWay", "BuyNow");
        console.log("updated to Pixel");
    };

    render() {
        return (
            // <LazyLoad
            //     height={'fit-content'}
            //     offset={0}
            //     throttle={250}
            // >
            // <div className="header__bodyPage">
            //     {/* <img src={Image1} /> */}
            //     <LazyLoadImage
            //         alt={image.alt}
            //         effect="blur"
            //         src={image.src}
            //     />
            //     <div className="textHeader">
            //         <span>Tự do kết hợp VẢI & THIẾT KẾ</span>
            //     </div>
            //     <Link
            //         to={{
            //             pathname: "/shopping-store",
            //             search: "?cat=all&search",
            //         }}
            //         onClick={this.updatePixel}
            //     >
            //         <button className="buttonHeder">
            //             TRẢI NGHIỆM NGAY
            //         </button>
            //     </Link>
            // </div>
            // </LazyLoad>
            <div>
                <div className="bannerLandingPage">
                    <img src={Models} alt="" />
                </div>
                <div className="formInput_wrapper d-flex flex-column align-items-center">
                    <div className="title1FormInput">
                        <img src={titleBanner} alt="" />
                    </div>
                    <div className="title2FormInput text-center">
                        <span>
                            Đầm Thiết Kế May Theo Số Đo Của
                            <br /> Bạn Giá Chỉ Từ 500K
                        </span>
                    </div>
                    <div className="title3FormInput">
                        <span className="font-weight-bold">
                            ĐĂNG KÝ ĐỂ NHẬN NGAY PHIẾU MUA HÀNG TRỊ GIÁ 168.000đ
                        </span>
                    </div>
                    <div className="formInput">
                        <div className="inputName">
                            <Input placeholder="Họ Tên" />
                        </div>
                        <div className="inputPhoneNumber">
                            <Input placeholder="Số Điện Thoại" />
                        </div>
                        <div className="inputEmail">
                            <Input placeholder="Email" />
                        </div>
                        <div className="buttonAcceptForm_wrapper d-flex justify-content-center">
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

export default BodyHeader;
