import React, { Component } from "react";
import "./ShoppingCartWeb.scss";
import { Icon, Input } from "antd";

import NavBarWeb from "../../../components/NavBar/NavBarWeb/index";

const tmp = new Array(2).fill("1");

export default class ShoppingCartWeb extends Component {
    render() {
        return (
            <div className="pageShoppingCartWeb">
                <NavBarWeb />
                <div className="titleHeader_ShoppingCart d-flex justify-content-center">
                    <span>Giỏ hàng</span>
                </div>
                <div className="body_ShoppingCart d-flex justify-content-between">
                    <div className="left">
                        <div className="productList">
                            <div className="titleTable d-flex">
                                <div className="column1"></div>
                                <div className="column2">
                                    <span>Sản phẩm</span>
                                </div>
                                <div className="column3">
                                    <span>Số lượng</span>
                                </div>
                                <div className="column4">
                                    <span>Tạm tính</span>
                                </div>
                                <div className="column5"></div>
                            </div>
                            {tmp.map(index => {
                                return (
                                    <div className="contentTable d-flex">
                                        <div className="column1">
                                            <div className="imageProduct"></div>
                                        </div>
                                        <div className="column2 d-flex flex-column justify-content-between">
                                            <div className="top d-flex flex-column">
                                                <span>
                                                    Đầm<br></br>Công Chúa - S
                                                </span>
                                                <span>B001C032</span>
                                            </div>
                                            <div className="bottom d-flex flex-column">
                                                <span>Eo: 47</span>
                                                <span>Ngực: 95</span>
                                                <div className="d-flex">
                                                    <span>Mông: 13</span>
                                                    <div className="buttonChange">
                                                        THAY ĐỔI
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column3">
                                            <div className="quantity d-flex align-items-center">
                                                <Icon type="minus" />
                                                <Input value="1" />
                                                <Icon type="plus" />
                                            </div>
                                        </div>
                                        <div className="column4">
                                            <span>920, 000 VNĐ</span>
                                        </div>
                                        <div className="column5">
                                            <Icon type="delete" />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="right d-flex flex-column">
                        <span>Tạm Tính</span>
                        <span>4,480,000 VNĐ</span>
                        <span>THANH TOÁN</span>
                    </div>
                </div>
            </div>
        );
    }
}
