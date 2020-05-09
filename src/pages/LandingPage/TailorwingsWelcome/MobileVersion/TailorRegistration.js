import React, { Component } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Tailor from "../../../../assets/imageLandingPageWelcomeMobile/tho-may.jpg";

class TailorRegistration extends Component {
    render() {
        return (
            <div className="section3_wrapper d-flex flex-column align-items-center">
                <div className="imageSection3_wrapper">
                    <LazyLoadImage
                        alt="tho-may-dang-ki-kiem-tien"
                        effect="blur"
                        src={Tailor}
                    />
                </div>
                <div className="contentSection3_wrapper d-flex flex-column align-items-center">
                    <span className="title1Section3">KIẾM THÊM THU NHẬP</span>
                    <span className="title2Section3 text-center">
                        Từ 10.000.000 - 15.000.000 <br />
                        triệu đồng / tháng
                    </span>
                    <a
                        className="buttonAcceptForm"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfuRlkLX1llCN0L9ZAwmhCxLS3NT5efPxNsbRMmxT3Oe7z0qw/viewform"
                        target="_blank"
                    >
                        <div className="buttonSection3">ĐĂNG KÝ NHẬN MAY</div>
                    </a>
                </div>
            </div>
        );
    }
}

export default TailorRegistration;
