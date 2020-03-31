import React, { Component } from "react";
import "../home.scss";

import iconIG from "../../../../assets/iconImage/instagram.svg";
import iconFacebook from "../../../../assets/iconImage/facebook.svg";
import iconYoutube from "../../../../assets/iconImage/youtube.svg";
import iconTailorWings from "../../../../assets/imageHomePage/bird logo.svg";

import { Input, Icon } from "antd";

export default class FooterPage extends Component {
    render() {
        return (
            <div className="footerPage d-flex flex-column align-items-center">
                <div className="titleFooter d-flex flex-column align-items-center">
                    <span>Đăng ký</span>
                    <span>để nhận ưu đãi mới nhất</span>
                </div>
                <div className="inputEmail d-flex flex-row align-items-center">
                    <Input placeholder="Email của bạn" />
                    <span className='buttonApcept'>ĐĂNG KÝ</span>
                </div>
                <div className="infomation d-flex flex-column">
                    <div className='d-flex justify-content-between'>
                        <span>VỀ TAILOR WINGS</span>
                        <span>TRỢ GIÚP</span>
                    </div>
                    <br></br>
                    <div className='d-flex justify-content-between'>
                        <span>ĐIỀU KIỆN & ĐIỀU KHOẢN</span>
                        <span>Liên hệ</span>
                    </div>
                </div>
                <div className="iconSocialNetwork d-flex flex-row justify-content-between">
                    <div className="iconIG">
                        <img src={iconIG} />
                    </div>
                    <div className="iconFacebook">
                        <img src={iconFacebook} />
                    </div>
                    <div className="iconYoutube">
                        <img src={iconYoutube} />
                    </div>
                </div>
                <div className="hotline d-flex flex-column align-items-center">
                    <span>HOTLINE 0939929405</span>
                    <span>wetailor@gmail.com</span>
                </div>
                <div className="iconLogoTailorWings">
                    <img src={iconTailorWings} />
                </div>
                <div className="titleEndFooter  d-flex flex-column align-items-center">
                    <span>© 2020 Tailor Wings</span>
                    <span>
                        Công ty TNHH Tailor Wings với số đăng ký kinh doanh:
                        0105777650
                    </span>
                </div>
            </div>
        );
    }
}
