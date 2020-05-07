import React, { Component } from "react";
import "./TailorwingsCovid.scss";
import { Input, message } from "antd";
import { setDocument } from "../../../services/Fundamental";
import { Link } from "react-router-dom";
import classNames from "classnames";
import NumberFormat from "react-number-format";
import ReactGA from "react-ga";
//
import imageCovid1 from "../../../assets/imageLandingPage/imagePageCovid1.png";
import imageCovid2 from "../../../assets/imageLandingPage/Group 28.svg";
import imageCovid3 from "../../../assets/imageLandingPage/Group 29.svg";
import imageCovid4 from "../../../assets/imageLandingPage/Group 30.svg";
import imageCovid5 from "../../../assets/imageLandingPage/Group 31.svg";
import imageCovid6 from "../../../assets/imageLandingPage/Group 32.svg";
import logo from "../../../assets/imageLandingPage/logo.svg";
import threedot from "../../../assets/imageLandingPage/Group 9.svg";
import { Helmet } from "react-helmet";
import { validateEmail } from "../../../services/CommonFunction";

const initGA = () => {
    ReactGA.initialize("UA-159143322-2");
};

const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
};

export default class TailorwingsCovid extends Component {
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
            email: "",
            errorValidate: new Array(3).fill(false),
        };
    }

    onInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    onCustomerInfoValidate = () => {
        let { name, phone, email, errorValidate } = this.state;
        let phoneModified = phone.replace(/ /gi, "");
        errorValidate[0] = name === "" ? true : false;
        errorValidate[1] =
            isNaN(phoneModified) ||
            phone === "" ||
            phoneModified.split("")[0] != 0
                ? true
                : false;
        errorValidate[2] = !validateEmail(email);
        if (!errorValidate.includes(true)) {
            setDocument(
                "covidLandingPage",
                { name, phone: phoneModified, email },
                phoneModified
            ).then(() => {
                message.success(
                    "Chúc mừng bạn đã nhận được ưu đãi từ TailorWings!"
                );
                name = "";
                phone = "";
                email = "";
                this.setState({
                    errorValidate,
                    name,
                    phone,
                    email,
                });
            });
        } else {
            this.setState({
                errorValidate,
            });
        }
    };

    // onShopNowClicked = () => {
    //     gtag_report_conversion();
    //     this.props.history.push('/');
    // }

    render() {
        const { name, phone, email, errorValidate } = this.state;
        return (
            <div className="tailorwingsCovid_wrapper d-flex flex-column align-items-center">
                <Helmet>
                    <script>
                        {`gtag("event", "conversion", {
                            send_to: "AW-652284793/RekoCLDz2swBEPmmhLcC",
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
                                    'send_to': 'AW-652284793/8TQ8CLvQ3MwBEPmmhLcC',
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
                <hr />
                <div className="contentFirst_tailorwingsCovid d-flex flex-column">
                    <span className="colorBlue">Hậu Cô Vy</span>
                    <span className="colorOrange">MỴ TRỞ LẠI </span>
                    <span className="colorBlue">Và Lợi Hại Hơn Xưa!</span>
                </div>
                <div className="imageCovid1">
                    <img src={imageCovid1} alt="" />
                </div>
                <div className="collectionFirst d-flex flex-column">
                    <Link
                        to={{
                            pathname: "/product-detail",
                            search: "?id=X001&pattern=M002",
                        }}
                    >
                        <div className="imageCovid2">
                            <img src={imageCovid2} alt="" />
                        </div>
                        <div className="button_collectionFirst">MUA NGAY</div>
                    </Link>
                </div>
                <div className="threedot" style={{ margin: "2.94vh 0" }}>
                    <img src={threedot} alt="" />
                </div>
                <div className="collectionFirst d-flex flex-column">
                    <Link
                        to={{
                            pathname: "/product-detail",
                            search: "?id=S006&pattern=T008",
                        }}
                    >
                        <div className="imageCovid2">
                            <img src={imageCovid3} alt="" />
                        </div>
                        <div className="button_collectionFirst">MUA NGAY</div>
                    </Link>
                </div>
                <div className="threedot" style={{ margin: "2.94vh 0" }}>
                    <img src={threedot} alt="" />
                </div>
                <div className="collectionFirst d-flex flex-column">
                    <Link
                        to={{
                            pathname: "/product-detail",
                            search: "?id=S002&pattern=M011",
                        }}
                    >
                        <div className="imageCovid2">
                            <img src={imageCovid4} alt="" />
                        </div>
                        <div className="button_collectionFirst">MUA NGAY</div>
                    </Link>
                </div>
                <div className="threedot" style={{ margin: "2.94vh 0" }}>
                    <img src={threedot} alt="" />
                </div>
                <div className="collectionFirst d-flex flex-column">
                    <Link
                        to={{
                            pathname: "/product-detail",
                            search: "?id=X006&pattern=R003",
                        }}
                    >
                        <div className="imageCovid2">
                            <img src={imageCovid5} alt="" />
                        </div>
                        <div className="button_collectionFirst">MUA NGAY</div>
                    </Link>
                </div>
                <div className="contentSecond d-flex flex-column align-items-center">
                    <span className="title_contentSecond colorBlue">
                        Với TailorWings Bạn <br />
                        Hoàn Toàn Có Thể...
                    </span>
                    <div className="image_contentSecond">
                        <img src={imageCovid6} alt="" />
                    </div>
                </div>
                <div className="endContent">
                    <svg
                        viewBox="0 0 375 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M110.777 19H114.665V5.368H120.041V2.2H105.401V5.368H110.777V19ZM126.42 5.896C124.356 5.896 122.268 6.448 120.852 7.456L122.196 10.072C123.132 9.328 124.548 8.872 125.916 8.872C127.932 8.872 128.892 9.808 128.892 11.416H125.916C121.98 11.416 120.372 13 120.372 15.28C120.372 17.512 122.172 19.192 125.196 19.192C127.092 19.192 128.436 18.568 129.132 17.392V19H132.636V11.632C132.636 7.72 130.356 5.896 126.42 5.896ZM126.132 16.672C124.812 16.672 124.02 16.048 124.02 15.112C124.02 14.248 124.572 13.6 126.324 13.6H128.892V14.92C128.46 16.096 127.38 16.672 126.132 16.672ZM137.897 4.288C139.289 4.288 140.225 3.376 140.225 2.128C140.225 0.975999 139.289 0.111999 137.897 0.111999C136.505 0.111999 135.569 1.024 135.569 2.2C135.569 3.376 136.505 4.288 137.897 4.288ZM136.025 19H139.769V6.088H136.025V19ZM143.244 19H146.988V1.192H143.244V19ZM156.606 19.192C160.71 19.192 163.686 16.432 163.686 12.544C163.686 8.656 160.71 5.896 156.606 5.896C152.502 5.896 149.502 8.656 149.502 12.544C149.502 16.432 152.502 19.192 156.606 19.192ZM156.606 16.12C154.734 16.12 153.294 14.776 153.294 12.544C153.294 10.312 154.734 8.968 156.606 8.968C158.478 8.968 159.894 10.312 159.894 12.544C159.894 14.776 158.478 16.12 156.606 16.12ZM169.765 7.792V6.088H166.189V19H169.933V12.904C169.933 10.432 171.301 9.304 173.365 9.304C173.653 9.304 173.893 9.328 174.205 9.352V5.896C172.213 5.896 170.677 6.544 169.765 7.792ZM205.258 2.2L201.346 14.104L197.506 2.2H193.906L189.946 14.008L186.154 2.2H182.122L187.642 19H191.794L195.61 7.624L199.306 19H203.482L208.978 2.2H205.258ZM212.991 4.288C214.383 4.288 215.319 3.376 215.319 2.128C215.319 0.975999 214.383 0.111999 212.991 0.111999C211.599 0.111999 210.663 1.024 210.663 2.2C210.663 3.376 211.599 4.288 212.991 4.288ZM211.119 19H214.863V6.088H211.119V19ZM226.185 5.896C224.433 5.896 222.921 6.496 221.913 7.6V6.088H218.337V19H222.081V12.616C222.081 10.24 223.377 9.136 225.177 9.136C226.833 9.136 227.793 10.096 227.793 12.184V19H231.537V11.608C231.537 7.672 229.233 5.896 226.185 5.896ZM244.84 6.088V7.744C243.856 6.496 242.368 5.896 240.568 5.896C236.992 5.896 234.112 8.368 234.112 12.136C234.112 15.904 236.992 18.376 240.568 18.376C242.248 18.376 243.664 17.848 244.648 16.768V17.32C244.648 19.648 243.496 20.848 240.856 20.848C239.2 20.848 237.4 20.272 236.296 19.384L234.808 22.072C236.32 23.248 238.696 23.848 241.144 23.848C245.8 23.848 248.392 21.64 248.392 16.84V6.088H244.84ZM241.312 15.304C239.344 15.304 237.904 14.032 237.904 12.136C237.904 10.24 239.344 8.968 241.312 8.968C243.28 8.968 244.696 10.24 244.696 12.136C244.696 14.032 243.28 15.304 241.312 15.304ZM256.22 19.192C260.084 19.192 262.316 17.488 262.316 15.088C262.316 10 254.516 12.136 254.516 9.928C254.516 9.256 255.236 8.728 256.916 8.728C258.092 8.728 259.364 8.968 260.636 9.688L261.884 7.024C260.66 6.304 258.692 5.896 256.916 5.896C253.148 5.896 250.94 7.624 250.94 10.072C250.94 15.232 258.74 13.072 258.74 15.184C258.74 15.904 258.092 16.36 256.364 16.36C254.78 16.36 253.028 15.856 251.876 15.112L250.628 17.8C251.828 18.592 254.036 19.192 256.22 19.192ZM88.2953 34.896C86.3513 34.896 84.6713 35.688 83.6393 37.008C82.7273 35.592 81.1913 34.896 79.3913 34.896C77.7353 34.896 76.2953 35.472 75.3353 36.576V35.088H71.7593V48H75.5033V41.52C75.5033 39.216 76.6793 38.136 78.3353 38.136C79.8953 38.136 80.7833 39.096 80.7833 41.184V48H84.5273V41.52C84.5273 39.216 85.7033 38.136 87.3833 38.136C88.8953 38.136 89.8313 39.096 89.8313 41.184V48H93.5753V40.608C93.5753 36.672 91.3673 34.896 88.2953 34.896ZM102.139 34.896C100.075 34.896 97.9871 35.448 96.5711 36.456L97.9151 39.072C98.8511 38.328 100.267 37.872 101.635 37.872C103.651 37.872 104.611 38.808 104.611 40.416H101.635C97.6991 40.416 96.0911 42 96.0911 44.28C96.0911 46.512 97.8911 48.192 100.915 48.192C102.811 48.192 104.155 47.568 104.851 46.392V48H108.355V40.632C108.355 36.72 106.075 34.896 102.139 34.896ZM101.851 45.672C100.531 45.672 99.7391 45.048 99.7391 44.112C99.7391 43.248 100.291 42.6 102.043 42.6H104.611V43.92C104.179 45.096 103.099 45.672 101.851 45.672ZM120.725 35.088L117.077 43.848L113.453 35.088H109.589L115.181 48.096L115.133 48.216C114.629 49.368 114.053 49.824 113.021 49.824C112.277 49.824 111.485 49.512 110.909 49.008L109.541 51.672C110.381 52.416 111.821 52.848 113.141 52.848C115.469 52.848 117.245 51.912 118.493 48.792L124.325 35.088H120.725ZM136.226 36.792V35.088H132.65V48H136.394V41.904C136.394 39.432 137.762 38.304 139.826 38.304C140.114 38.304 140.354 38.328 140.666 38.352V34.896C138.674 34.896 137.138 35.544 136.226 36.792ZM144.764 33.288C146.156 33.288 147.092 32.376 147.092 31.128C147.092 29.976 146.156 29.112 144.764 29.112C143.372 29.112 142.436 30.024 142.436 31.2C142.436 32.376 143.372 33.288 144.764 33.288ZM142.892 48H146.636V35.088H142.892V48ZM155.967 31.608L158.055 33.432H160.791L157.623 29.976H154.311L151.143 33.432H153.879L155.967 31.608ZM162.759 41.592C162.759 37.44 159.831 34.896 156.039 34.896C152.103 34.896 149.151 37.68 149.151 41.544C149.151 45.384 152.055 48.192 156.519 48.192C158.847 48.192 160.647 47.472 161.847 46.104L159.855 43.944C158.967 44.784 157.983 45.192 156.615 45.192C154.647 45.192 153.279 44.208 152.919 42.6H162.687C162.711 42.288 162.759 41.88 162.759 41.592ZM156.063 37.728C157.743 37.728 158.967 38.784 159.231 40.416H152.871C153.135 38.76 154.359 37.728 156.063 37.728ZM173.099 34.896C171.347 34.896 169.835 35.496 168.827 36.6V35.088H165.251V48H168.995V41.616C168.995 39.24 170.291 38.136 172.091 38.136C173.747 38.136 174.707 39.096 174.707 41.184V48H178.451V40.608C178.451 36.672 176.147 34.896 173.099 34.896ZM191.754 35.088V36.744C190.77 35.496 189.282 34.896 187.482 34.896C183.906 34.896 181.026 37.368 181.026 41.136C181.026 44.904 183.906 47.376 187.482 47.376C189.162 47.376 190.578 46.848 191.562 45.768V46.32C191.562 48.648 190.41 49.848 187.77 49.848C186.114 49.848 184.314 49.272 183.21 48.384L181.722 51.072C183.234 52.248 185.61 52.848 188.058 52.848C192.714 52.848 195.306 50.64 195.306 45.84V35.088H191.754ZM188.226 44.304C186.258 44.304 184.818 43.032 184.818 41.136C184.818 39.24 186.258 37.968 188.226 37.968C190.194 37.968 191.61 39.24 191.61 41.136C191.61 43.032 190.194 44.304 188.226 44.304ZM211.827 48.192C214.539 48.192 216.675 46.992 217.611 44.928L214.707 43.344C214.011 44.592 212.979 45.12 211.803 45.12C209.907 45.12 208.419 43.8 208.419 41.544C208.419 39.288 209.907 37.968 211.803 37.968C212.979 37.968 214.011 38.52 214.707 39.744L217.611 38.184C216.675 36.072 214.539 34.896 211.827 34.896C207.627 34.896 204.627 37.656 204.627 41.544C204.627 45.432 207.627 48.192 211.827 48.192ZM227.521 34.896C225.865 34.896 224.425 35.424 223.417 36.432V30.192H219.673V48H223.417V41.616C223.417 39.24 224.713 38.136 226.513 38.136C228.169 38.136 229.129 39.096 229.129 41.184V48H232.873V40.608C232.873 36.672 230.569 34.896 227.521 34.896ZM242.552 48.192C246.656 48.192 249.632 45.432 249.632 41.544C249.632 37.656 246.656 34.896 242.552 34.896C238.448 34.896 235.448 37.656 235.448 41.544C235.448 45.432 238.448 48.192 242.552 48.192ZM242.552 45.12C240.68 45.12 239.24 43.776 239.24 41.544C239.24 39.312 240.68 37.968 242.552 37.968C244.424 37.968 245.84 39.312 245.84 41.544C245.84 43.776 244.424 45.12 242.552 45.12ZM266.563 34.896C264.955 34.896 263.635 35.4 262.675 36.456V30.192H258.931V48H262.507V46.512C263.443 47.64 264.835 48.192 266.563 48.192C270.187 48.192 272.995 45.6 272.995 41.544C272.995 37.488 270.187 34.896 266.563 34.896ZM265.915 45.12C264.043 45.12 262.627 43.776 262.627 41.544C262.627 39.312 264.043 37.968 265.915 37.968C267.787 37.968 269.203 39.312 269.203 41.544C269.203 43.776 267.787 45.12 265.915 45.12ZM280.499 34.896C278.435 34.896 276.347 35.448 274.931 36.456L276.275 39.072C277.211 38.328 278.627 37.872 279.995 37.872C282.011 37.872 282.971 38.808 282.971 40.416H279.995C276.059 40.416 274.451 42 274.451 44.28C274.451 46.512 276.251 48.192 279.275 48.192C281.171 48.192 282.515 47.568 283.211 46.392V48H286.715V40.632C286.715 36.72 284.435 34.896 280.499 34.896ZM280.211 45.672C278.891 45.672 278.099 45.048 278.099 44.112C278.099 43.248 278.651 42.6 280.403 42.6H282.971V43.92C282.539 45.096 281.459 45.672 280.211 45.672ZM280.595 49.752C279.659 49.752 278.939 50.448 278.939 51.432C278.939 52.416 279.659 53.04 280.595 53.04C281.531 53.04 282.251 52.416 282.251 51.432C282.251 50.448 281.531 49.752 280.595 49.752ZM297.951 34.896C296.199 34.896 294.687 35.496 293.679 36.6V35.088H290.103V48H293.847V41.616C293.847 39.24 295.143 38.136 296.943 38.136C298.599 38.136 299.559 39.096 299.559 41.184V48H303.303V40.608C303.303 36.672 300.999 34.896 297.951 34.896Z"
                            fill="#111E6C"
                        />
                        <path d="M0 15H97" stroke="#111E6C" strokeWidth="2" />
                        <path
                            d="M273 15L375 15"
                            stroke="#111E6C"
                            strokeWidth="2"
                        />
                    </svg>
                    <div
                        onClick={() => {
                            window.gtag_report_conversion();
                            this.props.history.push("/");
                        }}
                        className="button_endContent"
                    >
                        ĐẶT MAY NGAY
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
                            value={email}
                            maxLength={50}
                            onChange={this.onInputChange}
                        />
                        <small
                            className={classNames({
                                error: errorValidate[2],
                                errorUnvisible: !errorValidate[2],
                            })}
                        >
                            Vui lòng nhập đúng địa chỉ email
                        </small>
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