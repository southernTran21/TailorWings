import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, message } from "antd";
import { validateEmail } from "../../../../services/CommonFunction";
import classNames from "classnames";
import { setDocument } from "../../../../services/Fundamental";
//
import iconFB from "../../.../../../../assets/imageHomePage/facebook.svg";
import iconYTB from "../../.../../../../assets/imageHomePage/youtube.svg";
import iconIG1 from "../../.../../../../assets/imageHomePage/instagram (1).svg";
import logoTailorWings from "../../.../../../../assets/imageHomePage/bird logo.svg";

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            isEmailError: false,
        };
    }

    onEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        });
    };

    emailValidation = () => {
        let { email, isEmailError } = this.state;
        let currentComponent = this;
        if (email != null && email !== "") {
            isEmailError = !validateEmail(email);
            if (!isEmailError) {
                setDocument("preferentialEmails", { email: email }, email).then(
                    function () {
                        message.success("Hoàn thành đăng ký nhận ưu đãi!");
                        currentComponent.setState({
                            isEmailError,
                            email: "",
                        });
                    }
                );
            } else {
                this.setState({
                    isEmailError,
                });
            }
        } else {
            this.setState({
                isEmailError: true,
            });
        }
    };

    render() {
        return (
            <div className="footer_wrapper fontMontserrat">
                <div className="d-flex justify-content-between">
                    <div className="info d-flex flex-column">
                        <a
                            href="https://www.facebook.com/TailorWings"
                            target="_blank"
                        >
                            <span>VỀ TAILOR WINGS</span>
                        </a>
                        <Link to="/policy">
                            <span>ĐIỀU KHOẢN</span>
                        </Link>
                        <Link to="/support">
                            <span>TRỢ GIÚP</span>
                        </Link>
                        <a>
                            <span>LIÊN HỆ</span>
                        </a>
                    </div>
                    <div className="contact">
                        <span>
                            HOTLINE 0902 541 398 <br></br>
                            info.tailorwings@gmail.com
                        </span>
                        <div className="icon">
                            <a>
                                <img src={iconYTB} alt="youtube-tailorwings" />
                            </a>
                            <a
                                href="https://www.facebook.com/TailorWings/"
                                target="_blank"
                            >
                                <img src={iconFB} alt="facebook-tailorwings" />
                            </a>
                            <a
                                href="https://www.instagram.com/tailorwings/"
                                target="_blank"
                            >
                                <img
                                    src={iconIG1}
                                    alt="instagram-tailorwings"
                                />
                            </a>
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
                        <div className="input d-flex justify-content-between">
                            <Input
                                placeholder="Email của bạn"
                                value={this.state.email}
                                onChange={this.onEmailChange}
                            />
                            <div
                                className="button d-flex justify-content-center align-items-center"
                                onClick={this.emailValidation}
                            >
                                <span>ĐĂNG KÝ </span>
                            </div>
                        </div>
                        <smal
                            className={classNames("emailError_unvisible", {
                                emailError: this.state.isEmailError,
                            })}
                        >
                            Lỗi: Email sai vui lòng nhập lại!
                        </smal>
                    </div>
                </div>
                <div className="endFooter d-flex flex-column">
                    <span>© 2020 Tailor Wings</span>
                    <span>
                        Công ty TNHH Thương Mại Kết Nối Á Âu / Số đăng ký kinh
                        doanh : 0313114301
                    </span>
                </div>
            </div>
        );
    }
}
