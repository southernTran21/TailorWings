import { Input, message } from "antd";
import classNames from "classnames";
import React, { Component } from "react";
import NumberFormat from "react-number-format";
import { validateEmail } from "../../../../services/CommonFunction";
import { setDocument } from "../../../../services/Fundamental";

class Footer extends Component {
    constructor(props) {
        super(props);
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
                "welcomeLandingPage",
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
    render() {
        const { name, phone, email, errorValidate } = this.state;
        return (
            <div className="footerLandingPage_wrapper d-flex flex-column align-items-center">
                <span className="title1Footer text-center">
                    TAILOR WINGS <br />
                    WEBSITE ĐẶT MAY ĐẦM THIẾT KẾ CỦA BẠN
                </span>
                <span className="title2Footer text-center">
                    ĐĂNG KÝ ĐỂ NHẬN NGAY PHIẾU MUA
                    <br /> HÀNG{" "}
                    <span className="text-underline">TRỊ GIÁ 168.000đ</span>
                </span>
                <div className="formInput_wrapper d-flex flex-column align-items-center">
                    {/* <div className="formInput">
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
                    </div> */}
                    <div className="formInput">
                        <div className="d-flex justify-content-between">
                            <div className="inputName">
                                <Input
                                    name="name"
                                    value={name}
                                    placeholder="Họ Tên"
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
                            </div>
                            <div className="inputPhoneNumber">
                                <NumberFormat
                                    name="phone"
                                    value={phone}
                                    className="ant-input"
                                    placeholder="Số Điện Thoại"
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
                            </div>
                        </div>
                        <div className="inputEmail">
                            <Input
                                name="email"
                                placeholder="Email"
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
                    </div>
                    <div className="buttonAcceptForm_wrapper">
                        <span
                            className="buttonAcceptForm d-flex justify-content-center align-items-center"
                            onClick={this.onCustomerInfoValidate}
                        >
                            NHẬN QUÀ NGAY
                        </span>
                    </div>
                </div>
                <div className="socialIcon_wrapper d-flex justify-content-between">
                    <a
                        id="facebook"
                        href="https://www.facebook.com/TailorWings"
                        target="_blank"
                    >
                        <svg
                            width="3.33vw"
                            height="3.33vw"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="iconFB"
                        >
                            <g clip-path="url(#clip0)">
                                <path
                                    d="M27.6764 47.3568C27.4778 47.3894 27.2792 47.4192 27.0806 47.4462C27.2792 47.4192 27.4778 47.3894 27.6764 47.3568Z"
                                    fill="#FF6D3B"
                                />
                                <path
                                    d="M28.1542 47.2746L27.8684 47.3248L28.1542 47.2746Z"
                                    fill="#FF6D3B"
                                />
                                <path
                                    d="M26.5491 47.5117C26.3171 47.5379 26.0835 47.561 25.8484 47.5809C26.0772 47.561 26.3108 47.5379 26.5491 47.5117Z"
                                    fill="#FF6D3B"
                                />
                                <path
                                    d="M27.0033 47.4557L26.6672 47.4975L27.0033 47.4557Z"
                                    fill="#FF6D3B"
                                />
                                <path
                                    d="M28.8023 47.1459L28.55 47.1986L28.8023 47.1459Z"
                                    fill="#FF6D3B"
                                />
                                <path
                                    d="M30.4132 46.7455L30.21 46.8017L30.4132 46.7455Z"
                                    fill="#FF6D3B"
                                />
                                <path
                                    d="M29.926 46.879L29.7036 46.9364L29.926 46.879Z"
                                    fill="#FF6D3B"
                                />
                                <path
                                    d="M29.2897 47.0387L29.0505 47.0913L29.2897 47.0387Z"
                                    fill="#FF6D3B"
                                />
                                <path
                                    d="M25.8414 47.582L25.4648 47.6107L25.8414 47.582Z"
                                    fill="#FF6D3B"
                                />
                                <path
                                    d="M47.6667 23.8333C47.6667 19.1196 46.2689 14.5116 43.65 10.5923C41.0312 6.67288 37.3089 3.6181 32.954 1.81422C28.599 0.0103266 23.8069 -0.461653 19.1837 0.457962C14.5605 1.37758 10.3138 3.64748 6.98063 6.98063C3.64748 10.3138 1.37758 14.5605 0.457962 19.1837C-0.461653 23.8069 0.0103266 28.599 1.81422 32.954C3.6181 37.3089 6.67288 41.0312 10.5923 43.65C14.5116 46.2689 19.1196 47.6667 23.8333 47.6667C23.9728 47.6667 24.1122 47.6667 24.2528 47.6667V29.1077H19.1286V23.141H24.2528V18.7497C24.2528 13.6565 27.3619 10.8847 31.9045 10.8847C33.4378 10.8806 34.9702 10.9602 36.4948 11.123V16.445H33.3667C30.8952 16.445 30.4161 17.62 30.4161 19.3431V23.1434H36.322L35.5522 29.1112H30.4125V46.7479C35.3852 45.3175 39.7577 42.3085 42.8701 38.1749C45.9826 34.0414 47.6661 29.0077 47.6667 23.8333Z"
                                    fill="#FF6D3B"
                                />
                                <path
                                    d="M25.4076 47.6143C25.1597 47.6301 24.9107 47.6425 24.6604 47.6512C24.9107 47.6425 25.1597 47.6301 25.4076 47.6143Z"
                                    fill="#FF6D3B"
                                />
                                <path
                                    d="M24.6483 47.6512L24.2527 47.6607L24.6483 47.6512Z"
                                    fill="#FF6D3B"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect
                                        width="47.6667"
                                        height="47.6667"
                                        fill="white"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a
                        id="instagram"
                        href="https://www.instagram.com/tailorwings/"
                        target="_blank"
                    >
                        <svg
                            width="3.33vw"
                            height="3.33vw"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="iconIG"
                        >
                            <g clip-path="url(#clip0)">
                                <path
                                    d="M28.5619 23.8333C28.5619 24.7355 28.2943 25.6175 27.7931 26.3677C27.2919 27.1178 26.5794 27.7025 25.7459 28.0478C24.9123 28.393 23.9951 28.4834 23.1102 28.3074C22.2254 28.1313 21.4125 27.6969 20.7746 27.0589C20.1366 26.421 19.7021 25.6081 19.5261 24.7232C19.3501 23.8384 19.4405 22.9212 19.7857 22.0876C20.131 21.2541 20.7157 20.5416 21.4658 20.0404C22.216 19.5392 23.098 19.2716 24.0002 19.2716C25.21 19.2716 26.3703 19.7522 27.2258 20.6077C28.0813 21.4632 28.5619 22.6235 28.5619 23.8333Z"
                                    fill="#FF6D3B"
                                />
                                <path
                                    d="M34.6679 15.7622C34.4405 15.1717 34.0918 14.6354 33.6443 14.188C33.1968 13.7405 32.6606 13.3918 32.0701 13.1644C31.2568 12.861 30.3974 12.6998 29.5295 12.6877C28.0863 12.6222 27.6538 12.6078 23.9989 12.6078C20.3441 12.6078 19.9115 12.6222 18.4684 12.6877C17.6005 12.6999 16.7411 12.8611 15.9278 13.1644C15.3373 13.3918 14.801 13.7405 14.3536 14.188C13.9061 14.6354 13.5574 15.1717 13.3299 15.7622C13.0265 16.5759 12.8653 17.4357 12.8533 18.304C12.7877 19.7471 12.7734 20.1797 12.7734 23.8345C12.7734 27.4894 12.7877 27.922 12.8533 29.3651C12.8654 30.233 13.0266 31.0924 13.3299 31.9057C13.5574 32.4962 13.9061 33.0325 14.3536 33.4799C14.801 33.9274 15.3373 34.2761 15.9278 34.5035C16.7414 34.8072 17.6012 34.9684 18.4696 34.9802C19.9127 35.0457 20.3453 35.06 23.9989 35.06C27.6526 35.06 28.0863 35.0457 29.5295 34.9802C30.3978 34.9684 31.2577 34.8072 32.0713 34.5035C32.6618 34.2761 33.198 33.9274 33.6455 33.4799C34.093 33.0325 34.4416 32.4962 34.6691 31.9057C34.9723 31.0924 35.1336 30.233 35.1458 29.3651C35.2113 27.922 35.2256 27.4894 35.2256 23.8345C35.2256 20.1797 35.2113 19.7471 35.1458 18.304C35.1336 17.4356 34.972 16.5757 34.6679 15.7622ZM24.0001 30.8606C22.6096 30.8606 21.2502 30.4482 20.094 29.6757C18.9378 28.9031 18.0366 27.8051 17.5045 26.5204C16.9723 25.2356 16.8331 23.822 17.1044 22.4581C17.3757 21.0943 18.0453 19.8415 19.0286 18.8582C20.0119 17.8749 21.2646 17.2053 22.6285 16.934C23.9923 16.6628 25.406 16.802 26.6907 17.3341C27.9754 17.8663 29.0735 18.7674 29.846 19.9236C30.6186 21.0799 31.031 22.4392 31.031 23.8298C31.031 25.6945 30.2902 27.4828 28.9717 28.8013C27.6531 30.1199 25.8648 30.8606 24.0001 30.8606ZM31.305 18.1705C30.9803 18.1705 30.6628 18.0742 30.3927 17.8938C30.1227 17.7134 29.9122 17.4569 29.7879 17.1568C29.6636 16.8568 29.6311 16.5266 29.6945 16.2081C29.7578 15.8895 29.9142 15.5969 30.1439 15.3673C30.3735 15.1376 30.6661 14.9812 30.9847 14.9179C31.3032 14.8545 31.6334 14.887 31.9335 15.0113C32.2335 15.1356 32.49 15.3461 32.6704 15.6161C32.8509 15.8862 32.9472 16.2036 32.9472 16.5284C32.9472 16.9639 32.7742 17.3816 32.4662 17.6896C32.1582 17.9975 31.7406 18.1705 31.305 18.1705Z"
                                    fill="#FF6D3B"
                                />
                                <path
                                    d="M24.0001 0C19.2863 0 14.6784 1.3978 10.759 4.01664C6.83963 6.63548 3.78485 10.3577 1.98096 14.7127C0.177075 19.0677 -0.294905 23.8598 0.62471 28.483C1.54432 33.1062 3.81423 37.3529 7.14738 40.686C10.4805 44.0192 14.7272 46.2891 19.3504 47.2087C23.9737 48.1283 28.7657 47.6563 33.1207 45.8525C37.4757 44.0486 41.1979 40.9938 43.8168 37.0744C46.4356 33.1551 47.8334 28.5471 47.8334 23.8333C47.8334 17.5123 45.3224 11.4502 40.8528 6.98062C36.3832 2.511 30.3211 0 24.0001 0V0ZM37.603 29.4759C37.5803 30.6113 37.3651 31.7347 36.9666 32.7982C36.615 33.7075 36.0774 34.5332 35.3881 35.2225C34.6988 35.9118 33.873 36.4495 32.9638 36.801C31.9007 37.1993 30.7777 37.4144 29.6426 37.4374C28.1828 37.5041 27.7169 37.5196 24.0001 37.5196C20.2833 37.5196 19.8173 37.5041 18.3576 37.4374C17.2225 37.4144 16.0995 37.1993 15.0364 36.801C14.1272 36.4495 13.3014 35.9118 12.6121 35.2225C11.9228 34.5332 11.3851 33.7075 11.0336 32.7982C10.6352 31.7351 10.42 30.6121 10.3972 29.4771C10.3305 28.0173 10.3138 27.5513 10.3138 23.8345C10.3138 20.1177 10.3293 19.6518 10.396 18.192C10.4184 17.0566 10.6331 15.9332 11.0312 14.8696C11.383 13.9605 11.9208 13.135 12.6101 12.4457C13.2993 11.7564 14.1249 11.2186 15.034 10.8668C16.0975 10.4685 17.2209 10.2533 18.3564 10.2305C19.8162 10.1637 20.2821 10.1482 23.9989 10.1482C27.7157 10.1482 28.1817 10.1637 29.6414 10.2317C30.7768 10.2542 31.9002 10.4689 32.9638 10.8668C33.873 11.2185 34.6986 11.7562 35.3879 12.4455C36.0772 13.1348 36.6149 13.9605 36.9666 14.8696C37.3651 15.9331 37.5803 17.0565 37.603 18.192C37.6697 19.6518 37.6852 20.1177 37.6852 23.8345C37.6852 27.5513 37.6697 28.0161 37.603 29.4759Z"
                                    fill="#FF6D3B"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect
                                        x="0.166748"
                                        width="47.6667"
                                        height="47.6667"
                                        fill="white"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <svg
                        width="3.33vw"
                        height="3.33vw"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="iconYTB"
                    >
                        <g clip-path="url(#clip0)">
                            <path
                                d="M21.1982 28.2985L28.9512 23.8333L21.1982 19.3682V28.2985Z"
                                fill="#FF6D3B"
                            />
                            <path
                                d="M24.1667 0C19.4529 0 14.845 1.3978 10.9256 4.01664C7.00626 6.63548 3.95148 10.3577 2.14759 14.7127C0.343701 19.0677 -0.128279 23.8598 0.791336 28.483C1.71095 33.1062 3.98085 37.3529 7.31401 40.686C10.6472 44.0192 14.8939 46.2891 19.5171 47.2087C24.1403 48.1283 28.9324 47.6563 33.2873 45.8525C37.6423 44.0486 41.3646 40.9938 43.9834 37.0744C46.6022 33.1551 48 28.5471 48 23.8333C48 17.5123 45.489 11.4502 41.0194 6.98062C36.5498 2.511 30.4877 0 24.1667 0V0ZM39.0625 23.8572C39.0771 26.259 38.8717 28.6571 38.4488 31.0215C38.2781 31.649 37.9464 32.221 37.4866 32.6809C37.0267 33.1407 36.4547 33.4724 35.8272 33.6431C33.4891 34.2604 24.1667 34.2604 24.1667 34.2604C24.1667 34.2604 14.8717 34.2604 12.5134 33.6229C11.8859 33.4522 11.3139 33.1204 10.854 32.6606C10.3942 32.2007 10.0625 31.6287 9.89174 31.0012C9.46529 28.636 9.25746 26.2366 9.27088 23.8333C9.25616 21.4315 9.46158 19.0334 9.88459 16.669C10.0582 16.0398 10.3905 15.4657 10.8495 15.0017C11.3085 14.5377 11.879 14.1992 12.5063 14.0188C14.8443 13.4062 24.1667 13.4062 24.1667 13.4062C24.1667 13.4062 33.4891 13.4062 35.82 14.0438C36.4475 14.2145 37.0196 14.5462 37.4794 15.0061C37.9393 15.4659 38.271 16.0379 38.4417 16.6655C38.8805 19.037 39.0884 21.4455 39.0625 23.8572Z"
                                fill="#FF6D3B"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect
                                    x="0.333374"
                                    width="47.6667"
                                    height="47.6667"
                                    fill="white"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="logoFooter_wrapper">
                    <svg
                        width="15.55vw"
                        height="12.01vw"
                        viewBox="0 0 224 173"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M130.304 6.1604V15.1928L137.11 9.34464L130.304 6.1604Z"
                            fill="#FF6D3B"
                        />
                        <path
                            d="M125.309 0.541091C121.647 -0.749255 117.671 0.291347 115.174 3.20503L80.4387 43.8301H110.242C110.387 43.8301 110.554 43.8301 110.699 43.8301V49.4702L118.421 50.7814C118.795 49.0956 117.505 47.4722 115.778 47.4722H112.739V43.6845C117.422 43.1433 121.771 41.1038 125.164 37.8155C129.139 33.9444 131.345 28.783 131.345 23.2887V8.92834C131.345 5.11974 128.972 1.83144 125.309 0.541091ZM129.305 23.2887C129.305 28.2419 127.328 32.9038 123.728 36.4211C120.127 39.9175 115.341 41.853 110.262 41.853H84.7884L116.735 4.49538C119.087 1.74819 122.354 1.62332 124.623 2.41418C126.891 3.20503 129.305 5.34867 129.305 8.92834V23.2887Z"
                            fill="#FF6D3B"
                        />
                        <path
                            d="M129.305 13.403L105.538 14.5268L77.5874 46.4941H79.6686C94.0081 46.4941 107.473 40.5002 116.61 30.0526L129.305 16.0461V14.5684V13.403Z"
                            fill="#FF6D3B"
                        />
                        <path
                            d="M138.317 100.023H131.969V84.6634C131.969 79.502 130.346 74.5279 127.266 70.2822C125.517 67.868 123.374 65.7868 120.918 64.1219C130.929 66.765 138.317 75.7142 138.317 86.2867V100.023ZM138.317 127.162H131.969V102.687H138.317V127.162ZM129.243 100.023H116.09V65.0792V64.3924C119.648 66.099 122.729 68.6173 125.039 71.8015C127.786 75.6101 129.243 80.0431 129.243 84.6634V100.023ZM129.243 127.162H116.09V121.209H125.559V102.666H129.243V127.162ZM116.11 115.611H122.853V118.566H116.11V115.611ZM116.09 102.791H122.833V112.968H116.09V102.791ZM112.531 53.9864C112.531 52.8001 113.53 51.822 114.737 51.822C115.965 51.822 116.943 52.8001 116.943 53.9864C116.943 55.1727 115.944 56.1509 114.737 56.1509C113.509 56.1509 112.531 55.1727 112.531 53.9864ZM100.231 127.162V102.687H103.915V121.23H113.384V127.162H100.231ZM97.5044 100.023H91.1567V86.2659C91.1567 75.6934 98.545 66.7442 108.556 64.1011C106.1 65.7868 103.935 67.8889 102.187 70.3239C99.1277 74.5695 97.5044 79.5228 97.5044 84.6634V100.023ZM97.5044 127.162H91.1567V102.687H97.5044V127.162ZM113.384 100.023H100.231V84.6634C100.231 80.0639 101.667 75.6309 104.414 71.8431C106.724 68.6381 109.804 66.099 113.384 64.3924V100.023ZM113.384 112.968H106.641V102.791H113.384V112.968ZM113.384 118.566H106.641V115.611H113.384V118.566ZM116.11 60.6879V58.6067C118.171 58.024 119.69 56.1717 119.69 53.9864C119.69 51.3433 117.484 49.1788 114.758 49.1788C112.031 49.1788 109.825 51.3433 109.825 53.9864C109.825 56.1717 111.344 58.024 113.405 58.6067V60.6879C99.5232 61.3747 88.4512 72.5924 88.4512 86.2659V129.805H141.064V86.2867C141.043 72.5924 129.971 61.3955 116.11 60.6879Z"
                            fill="#FF6D3B"
                        />
                        <path
                            d="M146.434 127.141H83.061V135.757H146.434V127.141Z"
                            fill="#FF6D3B"
                        />
                        <path
                            d="M125.289 7.88775C125.289 8.69942 124.644 9.34459 123.832 9.34459C123.041 9.34459 122.375 8.69942 122.375 7.88775C122.375 7.07608 123.02 6.43091 123.832 6.43091C124.623 6.43091 125.289 7.07608 125.289 7.88775Z"
                            fill="#FF6D3B"
                        />
                        <path
                            d="M6.76391 171.117V152.219H1.06141C0.686797 152.219 0.416241 152.074 0.249744 151.803C0.0832482 151.532 0 151.095 0 150.471V149.41C0 148.785 0.0832482 148.348 0.249744 148.078C0.416241 147.807 0.686797 147.661 1.06141 147.661H18.0232C18.3978 147.661 18.6684 147.807 18.8349 148.078C19.0014 148.348 19.0846 148.806 19.0846 149.41V150.471C19.0846 151.095 19.0014 151.532 18.8349 151.803C18.6684 152.074 18.3978 152.219 18.0232 152.219H12.3207V171.117C12.3207 171.845 11.5923 172.22 10.1563 172.22H8.90755C7.47152 172.22 6.76391 171.845 6.76391 171.117Z"
                            fill="#FF6D3B"
                        />
                        <path
                            d="M17.1074 171.45C17.1074 171.304 17.149 171.096 17.2531 170.825L25.1617 148.307C25.349 147.807 26.0358 147.557 27.2013 147.557H29.0535C30.219 147.557 30.9058 147.807 31.0931 148.307L39.0017 170.825C39.0641 171.096 39.1057 171.304 39.1057 171.45C39.1057 171.72 38.9601 171.907 38.6687 172.032C38.3773 172.157 37.9195 172.22 37.3159 172.22H35.7342C35.1723 172.22 34.7144 172.157 34.3814 172.053C34.0484 171.949 33.8195 171.762 33.7362 171.491L32.2794 167.225H23.8297L22.3729 171.491C22.2272 171.97 21.6653 172.22 20.7287 172.22H19.3135C17.8358 172.22 17.1074 171.97 17.1074 171.45ZM30.7393 162.584L28.6997 156.361C28.5749 156.049 28.4708 155.695 28.3875 155.279C28.3043 154.862 28.2211 154.488 28.1586 154.113H28.0129L27.9297 154.55C27.8048 155.32 27.6383 155.924 27.4718 156.361L25.349 162.584H30.7393Z"
                            fill="#FF6D3B"
                        />
                        <path
                            d="M41.0621 171.97C40.7083 171.783 40.521 171.491 40.521 171.117V148.702C40.521 147.932 41.2494 147.536 42.6855 147.536H43.9342C44.6834 147.536 45.2245 147.641 45.5575 147.828C45.8905 148.015 46.0778 148.307 46.0778 148.702V171.117C46.0778 171.887 45.3702 172.261 43.9342 172.261H42.6855C41.957 172.261 41.4159 172.157 41.0621 171.97Z"
                            fill="#FF6D3B"
                        />
                        <path
                            d="M50.4067 171.824C50.1778 171.595 50.0737 171.241 50.0737 170.763V148.702C50.0737 148.327 50.2402 148.036 50.594 147.849C50.9478 147.661 51.4889 147.557 52.2382 147.557H53.4453C54.1945 147.557 54.7356 147.661 55.0894 147.849C55.4432 148.036 55.6097 148.327 55.6097 148.702V167.579H63.6016C63.9762 167.579 64.2467 167.724 64.4132 167.995C64.5797 168.265 64.663 168.702 64.663 169.306V170.409C64.663 171.033 64.5797 171.47 64.4132 171.741C64.2467 172.012 63.9762 172.157 63.6016 172.157H51.5098C50.9895 172.157 50.6357 172.053 50.4067 171.824Z"
                            fill="#FF6D3B"
                        />
                        <path
                            d="M70.969 170.992C69.2624 170.014 67.9513 168.598 67.0563 166.725C66.1614 164.852 65.7244 162.563 65.7244 159.878C65.7244 157.193 66.1614 154.925 67.0563 153.052C67.9513 151.179 69.2624 149.763 70.969 148.806C72.6756 147.849 74.7568 147.349 77.2126 147.349C79.6684 147.349 81.7705 147.828 83.477 148.806C85.1836 149.763 86.4948 151.199 87.3897 153.052C88.2846 154.925 88.7217 157.193 88.7217 159.878C88.7217 162.563 88.2846 164.852 87.3897 166.725C86.4948 168.598 85.2044 170.014 83.477 170.992C81.7705 171.97 79.6684 172.449 77.2126 172.449C74.7568 172.449 72.6756 171.97 70.969 170.992ZM81.5623 165.81C82.5405 164.457 83.04 162.48 83.04 159.899C83.04 157.318 82.5405 155.341 81.5623 154.009C80.5842 152.677 79.1273 151.99 77.2126 151.99C75.2979 151.99 73.8619 152.656 72.8629 154.009C71.8639 155.362 71.3852 157.318 71.3852 159.878C71.3852 162.459 71.8847 164.436 72.8837 165.789C73.8827 167.141 75.3187 167.828 77.2126 167.828C79.1273 167.849 80.5842 167.162 81.5623 165.81Z"
                            fill="#FF6D3B"
                        />
                        <path
                            d="M91.9893 171.117V149.035C91.9893 148.556 92.0933 148.203 92.3223 147.974C92.5512 147.765 92.905 147.641 93.4045 147.641H100.397C106.35 147.641 109.305 149.826 109.305 154.196C109.305 155.528 108.93 156.673 108.16 157.63C107.39 158.588 106.391 159.295 105.101 159.774V159.92C105.538 160.107 106.017 160.502 106.495 161.106C106.995 161.71 107.369 162.396 107.682 163.146L110.845 170.846C110.949 171.158 111.011 171.387 111.011 171.512C111.011 171.97 110.304 172.199 108.868 172.199H107.39C106.183 172.199 105.496 171.949 105.309 171.47L102.458 164.644C102.187 164.124 101.937 163.708 101.688 163.416C101.438 163.125 101.084 162.917 100.647 162.75C100.21 162.604 99.6065 162.521 98.8572 162.521H97.4628V171.096C97.4628 171.824 96.7344 172.199 95.2984 172.199H94.0913C92.6969 172.22 91.9893 171.845 91.9893 171.117ZM100.897 157.901C101.375 157.901 101.833 157.776 102.27 157.506C102.707 157.235 103.04 156.881 103.29 156.402C103.54 155.945 103.665 155.445 103.665 154.883C103.665 154.072 103.394 153.426 102.853 152.948C102.312 152.469 101.563 152.219 100.647 152.219H97.5044V157.901H100.897Z"
                            fill="#FF6D3B"
                        />
                        <path
                            d="M124.539 172.032C124.206 171.907 123.998 171.72 123.957 171.491L118.296 149.014C118.233 148.868 118.212 148.702 118.212 148.473C118.212 148.182 118.4 147.953 118.774 147.786C119.149 147.62 119.711 147.536 120.46 147.536H121.397C122.791 147.536 123.603 147.911 123.79 148.64L126.475 159.899C126.516 160.086 126.683 160.835 126.953 162.126L127.578 164.935C127.744 163.978 128.056 162.646 128.514 160.939L128.806 159.899L131.761 148.286C131.823 148.015 132.011 147.828 132.344 147.724C132.677 147.599 133.135 147.536 133.717 147.536H135.091C135.674 147.536 136.152 147.599 136.465 147.724C136.798 147.849 136.985 148.036 137.047 148.286L139.899 159.899C140.252 161.335 140.669 163.104 141.126 165.185C141.189 164.956 141.376 164.124 141.688 162.708L142.334 159.92L145.122 148.66C145.33 147.932 146.121 147.557 147.516 147.557H147.911C148.66 147.557 149.202 147.641 149.576 147.807C149.951 147.974 150.138 148.202 150.138 148.494C150.138 148.577 150.138 148.681 150.117 148.764C150.096 148.848 150.096 148.931 150.076 149.035L144.227 171.512C144.165 171.741 143.936 171.928 143.582 172.053C143.228 172.178 142.771 172.24 142.25 172.24H139.628C139.108 172.24 138.65 172.178 138.296 172.053C137.942 171.928 137.734 171.741 137.672 171.512L134.716 159.399L134.154 157.006L133.53 159.399L130.471 171.491C130.408 171.72 130.179 171.907 129.826 172.032C129.472 172.157 129.014 172.22 128.494 172.22H125.913C125.33 172.22 124.872 172.157 124.539 172.032Z"
                            fill="#FF6D3B"
                        />
                        <path
                            d="M151.949 171.97C151.595 171.783 151.408 171.491 151.408 171.117V148.702C151.408 147.932 152.136 147.536 153.572 147.536H154.821C155.57 147.536 156.111 147.641 156.444 147.828C156.777 148.015 156.964 148.307 156.964 148.702V171.117C156.964 171.887 156.257 172.261 154.821 172.261H153.572C152.844 172.261 152.303 172.157 151.949 171.97Z"
                            fill="#FF6D3B"
                        />
                        <path
                            d="M160.939 171.117V148.702C160.939 148.327 161.106 148.036 161.46 147.849C161.814 147.661 162.355 147.557 163.104 147.557H164.644C165.227 147.557 165.705 147.62 166.08 147.745C166.455 147.869 166.767 148.14 167.017 148.515L175.487 161.252L176.465 162.667V148.681C176.465 148.307 176.632 148.015 176.986 147.828C177.339 147.641 177.88 147.536 178.63 147.536H179.649C180.399 147.536 180.94 147.641 181.273 147.828C181.606 148.015 181.793 148.307 181.793 148.681V171.096C181.793 171.824 181.086 172.199 179.649 172.199H178.276C177.693 172.199 177.214 172.136 176.84 172.011C176.486 171.887 176.174 171.637 175.924 171.283L167.037 158.026L166.267 156.923V171.096C166.267 171.824 165.56 172.199 164.124 172.199H163.104C161.668 172.22 160.939 171.845 160.939 171.117Z"
                            fill="#FF6D3B"
                        />
                        <path
                            d="M187.912 169.389C185.997 167.35 185.04 164.165 185.04 159.836C185.04 151.532 189.036 147.37 197.028 147.37C198.11 147.37 199.254 147.474 200.462 147.682C201.669 147.89 202.668 148.182 203.479 148.556C204.291 148.931 204.686 149.347 204.686 149.805C204.686 150.138 204.561 150.554 204.291 151.095C204.02 151.636 203.708 152.094 203.334 152.511C202.98 152.927 202.647 153.114 202.355 153.114C202.272 153.114 202.085 153.052 201.773 152.927C201.107 152.656 200.399 152.448 199.65 152.261C198.901 152.074 198.006 151.99 196.903 151.99C194.801 151.99 193.219 152.635 192.22 153.947C191.2 155.258 190.701 157.235 190.701 159.857C190.701 162.5 191.221 164.478 192.241 165.83C193.261 167.162 194.801 167.849 196.84 167.849C197.881 167.849 198.817 167.766 199.65 167.599V163.166H196.466C196.091 163.166 195.82 163.021 195.654 162.75C195.487 162.48 195.404 162.022 195.404 161.418V160.294C195.404 159.691 195.487 159.254 195.654 158.983C195.82 158.713 196.091 158.567 196.466 158.567H203.75C204.27 158.567 204.624 158.671 204.853 158.9C205.082 159.108 205.186 159.462 205.186 159.961V169.701C205.186 170.742 204.291 171.47 202.48 171.887C200.67 172.282 198.797 172.49 196.819 172.49C192.803 172.449 189.827 171.429 187.912 169.389Z"
                            fill="#FF6D3B"
                        />
                        <path
                            d="M211.45 171.949C210.16 171.616 209.182 171.2 208.495 170.721C207.808 170.242 207.475 169.785 207.475 169.348C207.475 169.015 207.6 168.578 207.871 168.078C208.141 167.579 208.453 167.142 208.807 166.788C209.161 166.434 209.473 166.247 209.723 166.247C209.869 166.247 210.181 166.371 210.68 166.621C211.409 166.996 212.095 167.287 212.741 167.516C213.386 167.745 214.135 167.849 214.988 167.849C215.925 167.849 216.737 167.662 217.382 167.308C218.027 166.954 218.36 166.309 218.36 165.414C218.36 164.894 218.193 164.436 217.86 164.061C217.527 163.687 217.09 163.354 216.57 163.104C216.05 162.833 215.342 162.542 214.426 162.188L212.824 161.522C211.846 161.064 211.034 160.565 210.326 160.003C209.64 159.462 209.078 158.713 208.641 157.818C208.204 156.902 207.975 155.799 207.975 154.488C207.975 152.885 208.37 151.553 209.182 150.492C209.993 149.43 211.034 148.64 212.324 148.14C213.615 147.641 215.009 147.391 216.487 147.391C217.694 147.391 218.797 147.516 219.775 147.765C220.753 148.015 221.523 148.327 222.085 148.702C222.647 149.077 222.918 149.472 222.918 149.847C222.918 150.159 222.814 150.575 222.606 151.054C222.397 151.553 222.148 151.97 221.836 152.344C221.523 152.719 221.232 152.885 220.961 152.885C220.837 152.885 220.628 152.823 220.316 152.698C219.817 152.511 219.317 152.344 218.818 152.219C218.318 152.094 217.694 152.032 216.965 152.032C215.717 152.032 214.843 152.219 214.364 152.615C213.885 153.01 213.636 153.468 213.636 153.988C213.636 154.592 213.802 155.091 214.135 155.508C214.468 155.924 214.884 156.257 215.384 156.507C215.883 156.777 216.591 157.068 217.486 157.422C218.839 157.984 219.962 158.525 220.816 159.025C221.669 159.524 222.418 160.253 223.043 161.21C223.667 162.147 223.979 163.354 223.979 164.831C223.979 166.621 223.584 168.099 222.814 169.244C222.044 170.388 221.045 171.221 219.838 171.741C218.63 172.261 217.299 172.511 215.883 172.511C214.218 172.449 212.741 172.282 211.45 171.949Z"
                            fill="#FF6D3B"
                        />
                    </svg>
                </div>
            </div>
        );
    }
}

export default Footer;
