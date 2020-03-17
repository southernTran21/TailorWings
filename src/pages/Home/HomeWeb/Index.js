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
                <div className="fourStep_wrapper d-flex flex-column align-items-center">
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
                    <div className='button d-flex flex-row justify-content-center align-items-center'>
                        <span>ĐẶT MAY NGAY</span>
                    </div>
                </div>
            </div>
        );
    }
}
