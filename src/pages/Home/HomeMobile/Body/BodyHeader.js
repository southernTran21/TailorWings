import { Input, message } from "antd";
import classNames from "classnames";
import React, { Component } from "react";
import ReactPixel from "react-facebook-pixel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import NumberFormat from "react-number-format";
import titleBanner from "../../../../assets/imageLandingPageWelcomeDesktop/titleBanner.png";
import Models from "../../../../assets/imageLandingPageWelcomeMobile/Models.jpg";
import { validateEmail } from "../../../../services/CommonFunction";
import { setDocument } from "../../../../services/Fundamental";

class BodyHeader extends Component {
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

    updatePixel = () => {
        ReactPixel.trackCustom("ShoppingStoreAccessWay", "BuyNow");
        console.log("updated to Pixel");
    };
    // onClick and use this function to track to Pixel
    render() {
        const { name, phone, email, errorValidate } = this.state;
        return (
            <div className="bannerLandingPage_wrapper">
                <div className="bannerLandingPage">
                    <LazyLoadImage
                        alt="dat-may-giao-ngay"
                        effect="blur"
                        src={Models}
                    />
                </div>
                <div className="formInput_wrapper d-flex flex-column align-items-center">
                    <div className="title1FormInput">
                        <LazyLoadImage
                            alt="dat-may-giao-ngay"
                            effect="blur"
                            src={titleBanner}
                        />
                    </div>
                    <div className="title2FormInput text-center">
                        <span>
                            Đầm Thiết Kế May Theo Số Đo
                            <br /> Của Bạn Giá Chỉ Từ 500K
                        </span>
                    </div>
                    <div className="title3FormInput">
                        <span className="font-weight-bold">
                            ĐĂNG KÝ ĐỂ NHẬN NGAY PHIẾU MUA HÀNG TRỊ GIÁ 168.000đ
                        </span>
                    </div>
                    <div className="formInput">
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
                        <div className="buttonAcceptForm_wrapper d-flex justify-content-center">
                            <span
                                className="buttonAcceptForm d-flex justify-content-center align-items-center"
                                onClick={this.onCustomerInfoValidate}
                            >
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
