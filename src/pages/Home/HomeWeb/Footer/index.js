import React, { Component } from "react";

import {Input} from 'antd'

import iconFB from "../../.../../../../assets/imageHomePage/facebook.svg";
import iconYTB from "../../.../../../../assets/imageHomePage/youtube.svg";
import iconIG1 from "../../.../../../../assets/imageHomePage/instagram (1).svg";
import logoTailorWings from "../../.../../../../assets/imageHomePage/tailorwings.svg";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer_wrapper fontMontserrat">
                <div className="d-flex justify-content-between">
                    <div className="info d-flex flex-column">
                        <span>VỀ CHÚNG TÔI</span>
                        <span>CHÍNH SÁCH HỖ TRỢ</span>
                        <span>LIÊN HỆ</span>
                    </div>
                    <div className="contact">
                        <span>
                            HOTLINE 0939929405<br></br>wetailor@gmail.com
                        </span>
                        <div className="icon">
                            <img src={iconYTB} alt="" />
                            <img src={iconFB} alt="" />
                            <img src={iconIG1} alt="" />
                        </div>
                    </div>
                    <div className="logo">
                        <img src={logoTailorWings} alt="" />
                    </div>
                    <div className="email">
                        <div className="title">
                            <span>
                                Đăng kí để <br></br>nhận ưu đãi mới nhất
                            </span>
                        </div>
                        <div className="d-flex input">
                            <Input placeholder="Email của bạn" />
                            <div className="button d-flex justify-content-center align-items-center">
                                <span>ĐĂNG KÝ </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="endFooter d-flex flex-column">
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
