import React, { Component } from "react";
import "./TailorwingNewExp.scss";
import { Input, message } from "antd";
import { setDocument } from "../../../services/Fundamental";
import { Link } from "react-router-dom";
import classNames from "classnames";
import NumberFormat from "react-number-format";
import ReactGA from "react-ga";
// import image
import imageStep from "../../../assets/imageLandingPage/Step.png";
import imageContentSecond from "../../../assets/imageLandingPage/landingPage1.svg";
import imageContentFour from "../../../assets/imageLandingPage/Group33.svg";
import logo from "../../../assets/imageLandingPage/logo.svg";
import group34 from "../../../assets/imageLandingPage/Group 34.svg";
import { Helmet } from "react-helmet";

const initGA = () => {
    ReactGA.initialize("UA-159143322-2");
};

const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
};

export default class TailorwingNewExp extends Component {
    constructor(props) {
        super(props);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        initGA();
        logPageView();
        this.state = {
            name: "",
            phone: "",
            errorValidate: new Array(2).fill(false),
        };
    }

    onInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    onCustomerInfoValidate = () => {
        let { name, phone, errorValidate } = this.state;
        let phoneModified = phone.replace(/ /gi, "");
        errorValidate[0] = name === "" ? true : false;
        errorValidate[1] =
            isNaN(phoneModified) ||
            phone === "" ||
            phoneModified.split("")[0] != 0
                ? true
                : false;
        if (!errorValidate.includes(true)) {
            setDocument(
                "newExpLandingPage",
                { name, phone: phoneModified },
                phoneModified
            ).then(() => {
                message.success(
                    "Chúc mừng bạn đã nhận được ưu đãi từ TailorWings!"
                );
                name = "";
                phone = "";
                this.setState({
                    errorValidate,
                    name,
                    phone,
                });
            });
        } else {
            this.setState({
                errorValidate,
            });
        }
    };
    render() {
        const { name, phone, errorValidate } = this.state;
        return (
            <div className="tailorwingNewExp_wrapper d-flex flex-column align-items-center">
                <Helmet>
                    <script>
                        {`gtag("event", "conversion", {
                            send_to: "AW-652284793/080iCP2a6swBEPmmhLcC",
                        })`}
                    </script>
                    <script>
                        {`
                            function gtag_report_conversion(url) {
                                var callback = function () {
                                    if (typeof(url) != 'undefined') {
                                    window.location = url;
                                    }
                                };
                                gtag('event', 'conversion', {
                                    'send_to': 'AW-652284793/EONaCN7M3MwBEPmmhLcC',
                                    'event_callback': callback
                                });
                                return false;
                            }
                        `}
                    </script>
                </Helmet>
                <div className="logoHederPage">
                    <img src={logo} alt="" />
                </div>
                <div className="contentFirst_wrapper">
                    <div className="image_contentFirst">
                        <img src={group34} alt="" />
                    </div>
                </div>
                <div className="contentSecond_wrapper d-flex flex-column align-items-center">
                    <div className="d-flex">
                        <div className="imageContentSecond">
                            <img src={imageContentSecond} alt="" />
                        </div>
                    </div>
                </div>
                <div className="contentThird_wrapper d-flex flex-column">
                    <span className="colorBlue text1_contentThird">
                        VỚI TAILOR WINGS
                        <br /> BẠN ĐƯỢC TỰ DO...
                    </span>
                    <div className="step">
                        <img src={imageStep} alt="" />
                    </div>
                </div>
                <div className="contentFour d-flex flex-column">
                    <div className="image">
                        <img src={imageContentFour} alt="" />
                    </div>
                    <div className="content d-flex flex-column">
                        <span className="colorBlue text_Content">
                            Giá chỉ
                            <br />
                            từ <span className="colorOrange">500.000đ</span>
                        </span>
                        <span
                            className="button"
                            onClick={() => {
                                window.gtag_report_conversion();
                                this.props.history.push("/");
                            }}
                        >
                            ĐẶT MAY NGAY
                        </span>
                    </div>
                </div>
                <div className="footerPage">
                    <div className="iconSVG">
                        <svg
                            viewBox="0 0 68 68"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="34" cy="34" r="34" fill="white" />
                            <path
                                d="M48.1553 32.1221H19.8447C19.5481 32.1221 19.3079 32.3625 19.3079 32.6589V49.3158C19.3079 49.6123 19.5481 49.8526 19.8447 49.8526H48.1554C48.4519 49.8526 48.6922 49.6122 48.6922 49.3158V32.659C48.6921 32.3624 48.4518 32.1221 48.1553 32.1221Z"
                                fill="#F7434C"
                            />
                            <path
                                d="M48.1553 32.1221H19.8447C19.5481 32.1221 19.3079 32.3625 19.3079 32.6589V34.8063H48.6922V32.6589C48.6921 32.3624 48.4518 32.1221 48.1553 32.1221Z"
                                fill="#DB2E37"
                            />
                            <path
                                d="M36.7426 32.1221H31.2576C30.961 32.1221 30.7207 32.3625 30.7207 32.6589V49.3158C30.7207 49.6123 30.961 49.8526 31.2576 49.8526H36.7426C37.0391 49.8526 37.2794 49.6122 37.2794 49.3158V32.659C37.2794 32.3624 37.039 32.1221 36.7426 32.1221Z"
                                fill="#FFDB57"
                            />
                            <path
                                d="M36.7426 32.1221H31.2576C30.961 32.1221 30.7207 32.3625 30.7207 32.6589V34.7948H37.2794V32.6589C37.2794 32.3624 37.039 32.1221 36.7426 32.1221Z"
                                fill="#F5BA3D"
                            />
                            <path
                                d="M47.1095 22.2046C46.5831 20.8326 45.7525 19.4926 44.8877 18.6199C44.5703 18.2998 44.143 18.1375 43.6566 18.1479C42.0448 18.1855 39.4183 20.2084 35.8501 24.1605C35.761 24.2591 35.7116 24.3873 35.7116 24.5203V27.3599C35.7116 27.6564 35.9519 27.8967 36.2484 27.8967H44.5063C46.3462 27.8967 47.1057 27.0015 47.4186 26.2506C47.8362 25.2495 47.7263 23.8125 47.1095 22.2046Z"
                                fill="#FFDB57"
                            />
                            <path
                                d="M47.4168 23.1404C47.4018 23.0853 47.3781 23.0329 47.3465 22.9853C46.5359 21.7596 44.7843 22.2182 43.4577 22.8187C39.6036 24.5633 38.0119 26.9665 37.9461 27.0679C37.8388 27.2331 37.8306 27.4435 37.9245 27.6165C38.0184 27.7895 38.1995 27.8971 38.3963 27.8971H44.5065C45.6773 27.8971 46.5455 27.5377 47.0871 26.829C47.7305 25.987 47.8445 24.7114 47.4168 23.1404Z"
                                fill="#EF9325"
                            />
                            <path
                                d="M32.1499 24.161C28.5816 20.2089 25.9551 18.1859 24.3433 18.1484C23.8556 18.1379 23.4295 18.3003 23.1122 18.6204C22.2475 19.493 21.4169 20.8331 20.8905 22.2051C20.2737 23.813 20.1638 25.2499 20.5811 26.2511C20.8941 27.0021 21.6535 27.8973 23.4935 27.8973H31.7514C32.0479 27.8973 32.2882 27.6569 32.2882 27.3604V24.5208C32.2882 24.3878 32.239 24.2596 32.1499 24.161Z"
                                fill="#FFDB57"
                            />
                            <path
                                d="M30.054 27.0678C29.9881 26.9664 28.3965 24.5632 24.5424 22.8186C23.2156 22.2181 21.4641 21.7597 20.6535 22.9851C20.622 23.0328 20.5983 23.0851 20.5833 23.1403C20.1554 24.7114 20.2695 25.9869 20.9129 26.8289C21.4545 27.5376 22.3227 27.897 23.4936 27.897H29.6038C29.8006 27.897 29.9816 27.7894 30.0755 27.6164C30.1694 27.4434 30.1612 27.233 30.054 27.0678Z"
                                fill="#EF9325"
                            />
                            <path
                                d="M36.2486 23.4531H31.7514C31.4548 23.4531 31.2146 23.6935 31.2146 23.99V27.3603C31.2146 27.6568 31.4548 27.8971 31.7514 27.8971H36.2486C36.5452 27.8971 36.7854 27.6567 36.7854 27.3603V23.99C36.7854 23.6934 36.5452 23.4531 36.2486 23.4531Z"
                                fill="#F5BA3D"
                            />
                            <path
                                d="M50.4632 26.8247H17.5368C17.2403 26.8247 17 27.0651 17 27.3615V32.659C17 32.9555 17.2403 33.1958 17.5368 33.1958H50.4632C50.7597 33.1958 51 32.9554 51 32.659V27.3615C51 27.065 50.7597 26.8247 50.4632 26.8247Z"
                                fill="#F7434C"
                            />
                            <path
                                d="M38.1236 26.8242H29.8763V33.1954H38.1236V26.8242Z"
                                fill="#FFDB57"
                            />
                        </svg>
                    </div>
                    <div className="contentFooter">
                        <span>
                            Nhận ngay
                            <br />
                            Phiếu Mua Hàng 168.000đ
                            <br />
                            cho đơn hàng đầu tiên nhân dịp ra mắt
                        </span>
                    </div>
                    <div className="inputInfo d-flex flex-column align-items-center">
                        <Input
                            name="name"
                            value={name}
                            placeholder="Nhập họ & tên người nhận"
                            maxLength={50}
                            onChange={this.onInputChange}
                        />
                        <small
                            className={classNames({
                                error: errorValidate[0],
                                errorUnvisible: !errorValidate[0],
                            })}
                        >
                            Vui lòng nhập tên khách hàng
                        </small>
                        <NumberFormat
                            name="phone"
                            value={phone}
                            className="ant-input"
                            placeholder="Nhập số điện thoại nhận hàng"
                            format="#### ### ###"
                            mask="_"
                            onChange={this.onInputChange}
                        />
                        <small
                            className={classNames({
                                error: errorValidate[1],
                                errorUnvisible: !errorValidate[1],
                            })}
                        >
                            Vui lòng nhập đúng 10 số điện thoại
                        </small>
                        <Input
                            name="email"
                            placeholder="Nhập email"
                            maxLength={50}
                            // onChange={this.onInputChange}
                        />
                        {/* <small
                            // className={classNames({
                            //     error: errorValidate[0],
                            //     errorUnvisible: !errorValidate[0],
                            // })}
                        >
                            Vui lòng nhập email
                        </small> */}
                    </div>
                    <div
                        className="buttonAccept"
                        onClick={this.onCustomerInfoValidate}
                    >
                        NHẬN NGAY
                    </div>
                </div>
            </div>
        );
    }
}
