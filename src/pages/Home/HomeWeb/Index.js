import React, { Component } from "react";
import "./home.scss";

import { Input, Menu, Icon } from "antd";

// import file svg and image
import logoHeader from "../.../../../../assets/imageHomePage/Logo Header.svg";
import iconAccount from "../.../../../../assets/imageHomePage/iconAccount.svg";
import iconShoppingBadge from "../.../../../../assets/imageHomePage/shopping-bag.svg";
import iconFlash from "../.../../../../assets/imageHomePage/flash.svg";
import iconCircle from "../.../../../../assets/imageHomePage/Ellipse.svg";
import imageWelcome from "../.../../../../assets/imageHomePage/imageWelcome.png";
import stepOne from "../.../../../../assets/imageHomePage/step 1.svg";
import stepTwo from "../.../../../../assets/imageHomePage/step 2.svg";
import stepThree from "../.../../../../assets/imageHomePage/step 3.svg";
import stepFour from "../.../../../../assets/imageHomePage/step 4.svg";
import imageCollection1 from "../.../../../../assets/imageHomePage/collection1.png";
import imageCollection2 from "../.../../../../assets/imageHomePage/collection2.png";
import imageCollection3 from "../.../../../../assets/imageHomePage/collection3.png";
import iconEnter from "../.../../../../assets/imageHomePage/iconEnter.svg";
import iconVectorRight from "../.../../../../assets/imageHomePage/vectorRight.svg";
import imageCollection from "../.../../../../assets/imageHomePage/imageBST.jpg";
import iconIG from "../.../../../../assets/imageHomePage/instagram.svg";
import iconFB from "../.../../../../assets/imageHomePage/facebook.svg";
import iconYTB from "../.../../../../assets/imageHomePage/youtube.svg";
import iconIG1 from "../.../../../../assets/imageHomePage/instagram (1).svg";
import logoTailorWings from "../.../../../../assets/imageHomePage/tailorwings.svg";

const { Search } = Input;
const { SubMenu } = Menu;

export default class HomeWeb extends Component {
    handleClick = e => {
        console.log("click ", e);
    };
    render() {
        return (
            <div className="homePage_wrapper">
                <div className="homeNavbar_wrapper d-flex flex-row">
                    <div className="col-3">
                        <div className="Empty"></div>
                    </div>
                    <div className="col-9">
                        <div className="navbar">
                            <div className="logo_wrapper">
                                <img src={logoHeader} alt="TailorWings" />
                            </div>
                            <div className="search_wrapper fontMontserrat">
                                <Search
                                    placeholder="Bạn tìm may gì?"
                                    onSearch={value => console.log(value)}
                                    style={{ width: "25vw" }}
                                />
                            </div>
                            <div className="personalInfo_wrapper d-flex justify-content-between">
                                <div className="account d-flex justify-content-center align-items-center">
                                    <img
                                        src={iconAccount}
                                        alt="TailorWings-Account"
                                    />
                                    <span className="fontMontserrat">
                                        TÀI KHOẢN
                                    </span>
                                </div>
                                <div className="shoppingBadge d-flex justify-content-center align-items-center">
                                    <img
                                        src={iconShoppingBadge}
                                        alt="TailorWings-ShoppingBadge"
                                    />
                                    <span className="fontMontserrat">
                                        GIỎ HÀNG (0)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="welcome d-flex fontMontserrat">
                    <div className="col-3">
                        <div className="sidebar  d-flex flex-column justify-content-center align-items-center">
                            <div className="new d-flex align-items-center">
                                <img src={iconCircle} alt="iconCircle" />
                                <span>Mới Nhất</span>
                                <img src={iconFlash} alt="iconFlash" />
                            </div>
                            <div className="menuCategory">
                                <Menu
                                    onClick={this.handleClick}
                                    style={{ width: 256 }}
                                    // defaultSelectedKeys={["1"]}
                                    defaultOpenKeys={["category", "collection"]}
                                    mode="inline"
                                >
                                    <SubMenu
                                        key="category"
                                        title={
                                            <div>
                                                <img src={iconCircle} alt="" />
                                                <span>Danh Mục</span>
                                            </div>
                                        }
                                    >
                                        <Menu.Item key="1">Đầm Ôm</Menu.Item>
                                        <Menu.Item key="2">Đầm Suông</Menu.Item>
                                        <Menu.Item key="3">Đầm Xòe</Menu.Item>
                                    </SubMenu>
                                    <SubMenu
                                        key="collection"
                                        title={
                                            <div>
                                                <img src={iconCircle} alt="" />
                                                <span>Bộ Sưu Tập</span>
                                            </div>
                                        }
                                    >
                                        <Menu.Item key="4">
                                            Đầm Dạo Phố
                                        </Menu.Item>
                                        <Menu.Item key="5">
                                            Đầm Dự Tiệc
                                        </Menu.Item>
                                        <Menu.Item key="6">
                                            Đầm Công Sở
                                        </Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </div>
                            <div className="blog d-flex align-items-center">
                                <img src={iconCircle} alt="iconCircle" />
                                <span>Blog</span>
                            </div>
                            <div className="socialNetwork d-flex flex-column align-items-start">
                                <span>Trợ Giúp</span>
                                <span>Về Tailor Wings</span>
                                <span>Facebook</span>
                                <span>Instagram</span>
                            </div>
                            <div className="button_wrapper d-flex flex-row justify-content-center align-items-center">
                                <span>Bạn là thợ may?</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="image">
                            <img src={imageWelcome} alt="imageWelcome" />
                        </div>
                    </div>
                </div>
                <div className="fourStep_wrapper d-flex flex-column align-items-center fontMontserrat">
                    <div className="titleHeader">
                        <span>
                            Đặt may giao tận nhà chỉ với 4 bước đơn giản.
                        </span>
                    </div>
                    <div className="fourStep d-flex flex-row justify-content-lg-between">
                        <div className="step1 d-flex flex-column align-items-center">
                            <div className="image d-flex flex-column justify-content-center">
                                <img src={stepOne} alt="" />
                            </div>
                            <div className="title">
                                <span>Chọn mẫu</span>
                            </div>
                        </div>
                        <div className="step2  d-flex flex-column align-items-center">
                            <div className="image d-flex flex-column justify-content-center">
                                <img src={stepTwo} alt="" />
                            </div>
                            <div className="title">
                                <span>Chọn vải</span>
                            </div>
                        </div>
                        <div className="step3 d-flex flex-column align-items-center">
                            <div className="image d-flex flex-column justify-content-center">
                                <img src={stepThree} alt="" />
                            </div>
                            <div className="title">
                                <span>Chọn size</span>
                            </div>
                        </div>
                        <div className="step4 d-flex flex-column align-items-center">
                            <div className="image d-flex flex-column justify-content-center">
                                <img src={stepFour} alt="" />
                            </div>
                            <div className="title">
                                <span>Đặt may</span>
                            </div>
                        </div>
                    </div>
                    <div className="numberStep d-flex justify-content-between align-items-center">
                        <div className="number">1</div>
                        <hr />
                        <div className="number">2</div>
                        <hr />
                        <div className="number">3</div>
                        <hr />
                        <div className="number">4</div>
                    </div>
                    <div className="button d-flex flex-row justify-content-center align-items-center">
                        <span>ĐẶT MAY NGAY</span>
                    </div>
                </div>
                <div className="striking_wrapper d-flex fontMontserrat">
                    <div className="col-7">
                        <div className="strikingfirst d-flex">
                            <div className="image">
                                <img src={imageCollection1} alt="" />
                            </div>
                            <div className="title d-flex flex-column">
                                <span>Đầm Suông</span>
                                <span>
                                    Phục vụ với mọi ngữ cảnh như dự tiệc, công
                                    sở và đi chơi…
                                </span>
                                <div className="image d-flex ">
                                    <img src={iconEnter} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 d-flex flex-column">
                        <div className="strikingSecond">
                            <div className="image"></div>
                            <div className="titleFirst d-flex flex-column">
                                <span>Đầm Ôm</span>
                                <span>
                                    Xu hướng đang thịnh ở các cửa hàng bán quần
                                    áo.
                                </span>
                                <img src={iconEnter} alt="" />
                            </div>
                        </div>
                        <div className="strikingSecond">
                            <span className="titleSecond d-flex flex-column">
                                <span>Đầm Xòe</span>
                                <span>
                                    Được sử dụng rộng rãi & ứng dụng nhiều trong
                                    cuộc sống.
                                </span>
                                <img src={iconEnter} alt="" />
                            </span>
                        </div>
                        <div className="image"></div>
                    </div>
                </div>
                <div className="weYour d-flex flex-column justify-content-center align-items-center fontMontserrat">
                    <span>We Tailor Your Wings</span>
                    <span>
                        Tự do lựa chọn để thể hiện phong cách của chính bạn.{" "}
                        <span className="text-bold">
                            Tất cả có trên cùng một ứng dụng.
                        </span>
                    </span>
                </div>
                <div className="collection_wrapper d-flex fontMontserrat">
                    <div className="collection d-flex flex-column justify-content-center">
                        <span>Bộ Sưu Tập</span>
                        <svg height="45.18vh" width="14.16vw">
                            <line
                                x1="0"
                                y1="0"
                                x2="14.16vw"
                                y2="45.18vh"
                                style={{
                                    stroke: "#111e6c",
                                    strokeWidth: "1.2"
                                }}
                            />
                        </svg>
                        <span>
                            Khám phá ngay những bộ sưu tập mới nhất từ nhà may.
                        </span>
                    </div>
                    <div className="selectionCollection d-flex">
                        <div className="selection d-flex">
                            <div className="image">
                                <img src={imageCollection} alt="" />
                            </div>
                            <div className="title d-flex flex-column align-items-center">
                                <span>
                                    Đầm<br></br> Dạo Phố
                                </span>
                                <span>
                                    XEM NGAY{" "}
                                    <img src={iconVectorRight} alt="" />
                                </span>
                            </div>
                        </div>
                        <div
                            className="selection d-flex"
                            style={{
                                marginLeft: "1.66vw",
                                marginRight: "1.66vw"
                            }}
                        >
                            <div className="image">
                                <img src={imageCollection} alt="" />
                            </div>
                            <div className="title d-flex flex-column align-items-center">
                                <span>
                                    Đầm <br></br> Công Sở
                                </span>
                                <span>
                                    XEM NGAY{" "}
                                    <img src={iconVectorRight} alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="selection d-flex">
                            <div className="image">
                                <img src={imageCollection} alt="" />
                            </div>
                            <div className="title d-flex flex-column align-items-center">
                                <span>
                                    Đầm <br></br> Dự Tiệc
                                </span>
                                <span>
                                    XEM NGAY{" "}
                                    <img src={iconVectorRight} alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="topList d-flex flex-column align-items-center fontMontserrat">
                    <div className="title">
                        <span>Nổi bật trong tuần</span>
                    </div>
                </div>
                <div className="weGive d-flex flex-column align-items-center fontMontserrat">
                    <div className="title d-flex flex-column align-items-center">
                        <span>We Give Tailor Wings</span>
                        <span>
                            Trở thành đối tác của Tailor Wings để làm chủ cuộc
                            sống của mình tốt hơn.
                        </span>
                    </div>
                    <div className="image d-flex justify-content-between align-items-center">
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                    <div className="button">
                        <span>KẾT NỐI NGAY</span>
                    </div>
                </div>
                <div className="passion d-flex fontMontserrat">
                    <div className="title d-flex flex-column">
                        <span>
                            Passion <br></br> Led Us Here
                        </span>
                        <span>
                            Quần áo bạn mặc là do bàn tay của người thợ may tạo
                            ra. Hãy cùng Tailor Wings chắp cho những đôi cánh
                            chưa từng được bay lên - những người thợ may tận
                            tụy.
                        </span>
                    </div>
                    <div className="image"></div>
                </div>
                <div className="instagram fontMontserrat">
                    <div className="title d-flex align-items-center">
                        <img src={iconIG} alt="instagram" />
                        <span>Instagram</span>
                    </div>
                    <div className="crouselImage d-flex">
                        <div className="image"></div>
                        <div
                            className="image"
                            style={{ margin: "0 0.83vw" }}
                        ></div>
                        <div className="image"></div>
                    </div>
                </div>
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
            </div>
        );
    }
}
