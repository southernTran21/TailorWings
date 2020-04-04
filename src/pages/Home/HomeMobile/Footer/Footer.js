import React, { Component } from "react";
import "../home.scss";
import { Input, Icon, message } from "antd";
import { validateEmail } from "../../../../services/CommonFunction";
import classNames from "classnames";
import { setDocument } from "../../../../services/Fundamental";
import { Link } from "react-router-dom";
//
import iconIG from "../../../../assets/iconImage/instagram.svg";
import iconFacebook from "../../../../assets/iconImage/facebook.svg";
import iconYoutube from "../../../../assets/iconImage/youtube.svg";
import iconTailorWings from "../../../../assets/imageHomePage/bird logo.svg";

export default class FooterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            isEmailError: false
        };
    }

    onEmailChange = e => {
        this.setState({
            email: e.target.value
        });
    };

    emailValidation = () => {
        let { email, isEmailError } = this.state;
        let currentComponent = this;
        if (email != null && email !== "") {
            isEmailError = !validateEmail(email);
            if (!isEmailError) {
                setDocument("preferentialEmails", { email: email }, email).then(
                    function() {
                        message.success("Hoàn thành đăng ký nhận ưu đãi!");
                        console.log("isEmailError", isEmailError);
                        currentComponent.setState({
                            isEmailError,
                            email: ""
                        });
                    }
                );
            } else {
                this.setState({
                    isEmailError
                });
            }
        } else {
            this.setState({
                isEmailError: true
            });
        }
    };
    render() {
        return (
            <div className="footerPage d-flex flex-column align-items-center">
                <div className="titleFooter d-flex flex-column align-items-center">
                    <span>Đăng ký</span>
                    <span>để nhận ưu đãi mới nhất</span>
                </div>
                <div className="inputEmail d-flex flex-row align-items-center">
                    <Input
                        placeholder="Email của bạn"
                        value={this.state.email}
                        onChange={this.onEmailChange}
                    />
                    <span
                        className="buttonApcept"
                        onClick={this.emailValidation}
                    >
                        ĐĂNG KÝ
                    </span>
                </div>
                <smal
                    className={classNames("emailError_unvisible", {
                        emailError: this.state.isEmailError
                    })}
                >
                    Lỗi: Email sai vui lòng nhập lại!
                </smal>
                <div className="infomation d-flex flex-column">
                    <div className="d-flex justify-content-between">
                        <span>VỀ TAILOR WINGS</span>
                        <Link to="/support">
                            <span>CHÍNH SÁCH HỖ TRỢ</span>
                        </Link>
                    </div>
                    <br></br>
                    <div className="d-flex justify-content-between">
                        <Link to="/policy">
                            <span>ĐIỀU KIỆN & ĐIỀU KHOẢN</span>
                        </Link>
                        <span>Liên hệ</span>
                    </div>
                </div>
                <div className="iconSocialNetwork d-flex flex-row justify-content-between">
                    <a>
                        <img src={iconYoutube} alt="youtube-tailorwings" />
                    </a>
                    <a
                        href="https://www.facebook.com/TailorWings/"
                        target="_blank"
                    >
                        <img src={iconFacebook} alt="facebook-tailorwings" />
                    </a>
                    <a
                        href="https://www.instagram.com/tailorwings/"
                        target="_blank"
                    >
                        <img src={iconIG} alt="instagram-tailorwings" />
                    </a>
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
