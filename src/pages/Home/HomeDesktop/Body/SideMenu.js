import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import iconFlash from "../../.../../../../assets/imageHomePage/flash.svg";
import iconCircle from "../../.../../../../assets/imageHomePage/Ellipse.svg";

const { SubMenu } = Menu;

export default class SideMenu extends Component {
    render() {
        return (
            <div className="col-3">
                <div className="sidebar  d-flex flex-column justify-content-center align-items-center">
                    <Link
                        to={{
                            pathname: "/shopping-store",
                            search: "?cat=all&search"
                        }}
                        style={{
                            width: "fit-content",
                            height: "fit-content",
                            textDecoration: "none",
                            border: "none"
                        }}
                    >
                        <div className="new d-flex align-items-center">
                            <img src={iconCircle} alt="iconCircle" />
                            <span>Mới Nhất</span>
                            <img src={iconFlash} alt="iconFlash" />
                        </div>
                    </Link>
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
                                <Menu.Item key="1">
                                    <Link
                                        to={{
                                            pathname: "/shopping-store",
                                            search: "?cat=damom&search"
                                        }}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            textDecoration: "none",
                                            border: "none"
                                        }}
                                    >
                                        Đầm Ôm
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link
                                        to={{
                                            pathname: "/shopping-store",
                                            search: "?cat=damsuong&search"
                                        }}
                                        style={{
                                            width: "fit-content",
                                            height: "fit-content",
                                            textDecoration: "none",
                                            border: "none"
                                        }}
                                    >
                                        Đầm Suông
                                    </Link>
                                </Menu.Item>

                                <Menu.Item key="3">
                                    <Link
                                        to={{
                                            pathname: "/shopping-store",
                                            search: "?cat=damxoe&search"
                                        }}
                                        style={{
                                            width: "fit-content",
                                            height: "fit-content",
                                            textDecoration: "none",
                                            border: "none"
                                        }}
                                    >
                                        Đầm Xòe
                                    </Link>
                                </Menu.Item>
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
                                    <Link
                                        to={{
                                            pathname: "/shopping-store",
                                            search: "?cat=damdaopho&search"
                                        }}
                                        style={{
                                            width: "fit-content",
                                            height: "fit-content",
                                            textDecoration: "none",
                                            border: "none"
                                        }}
                                    >
                                        Đầm Dạo Phố
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="5">
                                    <Link
                                        to={{
                                            pathname: "/shopping-store",
                                            search: "?cat=damdutiec&search"
                                        }}
                                        style={{
                                            width: "fit-content",
                                            height: "fit-content",
                                            textDecoration: "none",
                                            border: "none"
                                        }}
                                    >
                                        Đầm Dự Tiệc
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="6">
                                    <Link
                                        to={{
                                            pathname: "/shopping-store",
                                            search: "?cat=damcongso&search"
                                        }}
                                        style={{
                                            width: "fit-content",
                                            height: "fit-content",
                                            textDecoration: "none",
                                            border: "none"
                                        }}
                                    >
                                        Đầm Công Sở
                                    </Link>
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
        );
    }
}
