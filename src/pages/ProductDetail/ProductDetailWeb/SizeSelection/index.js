import React, { Component } from "react";
import "./SizeSelection.scss";
import { Link } from "react-router-dom";
import { Icon, Input } from "antd";

import imageBody from "../../../../assets/imageSizeSelection/size S.svg";

const tmp = new Array(6).fill("1");

export default class SizeSelectionWeb extends Component {
    render() {
        return (
            <div className="pageSizeSelectionWeb d-flex align-items-center">
                <Link
                    style={{
                        height: "fit-content",
                        width: "fit-content",
                        border: "none",
                        textDecoration: "none"
                    }}
                    // to={{
                    //     pathname: "/shopping-store",
                    //     search: "?cat=all&search="
                    // }}
                >
                    <div className="iconBack d-flex flex-column">
                        <Icon type="arrow-left" />
                        <span>CHỌN VẢI</span>
                    </div>
                </Link>
                <div className="bodyScale d-flex flex-column align-items-center">
                    <div className="imageBodySize">
                        <img src={imageBody} alt="" />
                    </div>
                    <div className="inputBody d-flex justify-content-between">
                        <div className="d-flex flex-column">
                            <span>NGỰC</span>
                            <Input placeholder="NGỰC" />
                        </div>
                        <div className="d-flex flex-column">
                            <span>EO</span>
                            <Input placeholder="EO" />
                        </div>
                        <div className="d-flex flex-column">
                            <span>MÔNG</span>
                            <Input placeholder="MÔNG" />
                        </div>
                    </div>
                    <div className="selectionSize d-flex justify-content-between">
                        {tmp.map(index => {
                            return (
                                <div
                                    className="selecttion d-flex justify-content-center align-items-center"
                                    key={index}
                                >
                                    <span>XXL</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='d-flex flex-column'>
                    <div className="infoProduct">
                        <div className="info d-flex flex-column">
                            <span>ĐẦM CÔNG CHÚA</span>
                            <span>B001C032</span>
                            <span>Mô tả thiết kế</span>
                            <span>
                                Đầm dáng ôm tay lỡ, hàng nút giả trước. Thông số
                                người mẫu: Chiều cao 160cm / Cân nặng 48kg.
                            </span>
                            <span>Mô tả vải</span>
                            <span>Đang trong quá trình phát triển.</span>
                        </div>
                        <div className="d-flex">
                            <div className="changeQuantity d-flex flex-column">
                                <span>Số lượng</span>
                                <div className="quantity d-flex align-items-center">
                                    <Icon type="minus" />
                                    <Input value="1" />
                                    <Icon type="plus" />
                                </div>
                            </div>
                            <div className="total d-flex flex-column">
                                <span>Giá</span>
                                <span>790,000 VNĐ</span>
                            </div>
                        </div>
                    </div>
                    <div className='buttonApcept d-flex justify-content-center align-items-center'>ĐẶT MAY</div>
                </div>
            </div>
        );
    }
}
