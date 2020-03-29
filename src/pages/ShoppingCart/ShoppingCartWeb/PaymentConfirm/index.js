import React, { Component } from "react";
import "./Payment.scss";

import { Radio } from "antd";

export default class PaymentConfirm extends Component {
    render() {
        return (
            <div className="pagePayment">
                <div className="titleHeaderPage d-flex justify-content-center">
                    <span>Xác nhận đơn hàng</span>
                </div>
                <div className="bodyContent d-flex">
                    <div className="col-6" style={{ paddingRight: "2vw" }}>
                        <div className="titleInfo d-flex justify-content-between align-items-center">
                            <span>Thông tin đơn hàng</span>
                            <span>THAY ĐỔI</span>
                        </div>
                        <div className="productList">
                            <div className="contentInfo d-flex">
                                <div className="imageContent"></div>
                                <div
                                    className="d-flex flex-column justify-content-between"
                                    style={{ width: "100%" }}
                                >
                                    <div className="top d-flex justify-content-between">
                                        <div className="left d-flex flex-column">
                                            <span>Đầm Công Chúa - S</span>
                                            <span>B001C032</span>
                                        </div>
                                        <div className="right">
                                            <span>x1</span>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <span>290,000 VND</span>
                                    </div>
                                </div>
                            </div>
                            <div className="contentInfo d-flex">
                                <div className="imageContent"></div>
                                <div
                                    className="d-flex flex-column justify-content-between"
                                    style={{ width: "100%" }}
                                >
                                    <div className="top d-flex justify-content-between">
                                        <div className="left d-flex flex-column">
                                            <span>Đầm Công Chúa - S</span>
                                            <span>B001C032</span>
                                        </div>
                                        <div className="right">
                                            <span>x1</span>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <span>290,000 VND</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6" style={{ paddingLeft: "4vw" }}>
                        <div className="address">
                            <div className="titleHead d-flex justify-content-between align-items-center">
                                <span>Địa chỉ nhận hàng</span>
                                <span
                                // onClick={() =>
                                //     this.props.onStepChange("customerInfo")
                                // }
                                >
                                    THAY ĐỔI
                                </span>
                            </div>
                            <div className="content d-flex flex-column">
                                <span>DUONG DINH DONG KHOA - 0939920405</span>
                                <span>
                                    103A NGUYEN VAN LAC, Phường 19, Quận Bình
                                    Thạnh, Hồ Chí Minh
                                </span>
                                {/* <span>{`${name} - ${phoneModified}`}</span>
                                <span>{address}</span> */}
                            </div>
                        </div>
                        <div className="selectPayment">
                            <div className="titleHead d-flex justify-content-between align-items-center">
                                <span>Chọn hình thức thanh toán</span>
                            </div>
                            <div className="content d-flex flex-column">
                                <div className="selection d-flex flex-column justify-content-center">
                                    <Radio
                                    // checked={paymentState[0]}
                                    // onChange={() =>
                                    //     this.props.onPaymentMethodChange(
                                    //         "COD"
                                    //     )
                                    // }
                                    >
                                        Thanh toán khi nhận hàng (COD)
                                    </Radio>
                                </div>
                                <div className="selection d-flex flex-column justify-content-center">
                                    <Radio
                                    // checked={paymentState[1]}
                                    // onChange={() =>
                                    //     this.props.onPaymentMethodChange(
                                    //         "ATM"
                                    //     )
                                    // }
                                    >
                                        Thanh toán chuyển khoản
                                    </Radio>
                                </div>
                            </div>
                        </div>
                        <div className="cost d-flex justify-content-between align-items-center">
                            <span>PHÍ GIAO HÀNG</span>
                            <span>MIỄN PHÍ</span>
                        </div>
                        <div className="total d-flex align-items-center justify-content-between">
                            <span>Thành tiền</span>
                            <span>620.000 VNĐ</span>
                            {/* <span>{subtotalPrice}</span> */}
                        </div>
                        <div className='buttonApcept d-flex align-items-center justify-content-center'>
                            <span>HOÀN TẤT ĐẶT HÀNG</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
