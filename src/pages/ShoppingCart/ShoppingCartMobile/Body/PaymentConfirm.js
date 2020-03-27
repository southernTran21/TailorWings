import React, { Component } from "react";
import { Radio } from "antd";

export default class PaymentConfirm extends Component {
    render() {
        let { name, phone, address } = this.props.customerInfo;
        let { productsOnCart, subtotalPrice, paymentMethod } = this.props;
        let paymentState = new Array(2).fill(false);
        let phoneModified = phone.replace(/ /gi, "");
        subtotalPrice =
            subtotalPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") +
                " VNĐ" || "0 VNĐ";
        if (paymentMethod === "COD") {
            paymentState[0] = true;
        } else {
            paymentState[1] = true;
        }
        return (
            <div className="bodyPagePaymentConfirm">
                <div className="address">
                    <div className="titleHead d-flex justify-content-between align-items-center">
                        <span>Địa chỉ nhận hàng</span>
                        <span
                            onClick={() =>
                                this.props.onStepChange("customerInfo")
                            }
                        >
                            THAY ĐỔI
                        </span>
                    </div>
                    <div className="content d-flex flex-column">
                        <span>{`${name} - ${phoneModified}`}</span>
                        <span>{address}</span>
                    </div>
                </div>
                <div className="selectPayment">
                    <div className="titleHead d-flex justify-content-between align-items-center">
                        <span>Chọn hình thức thanh toán</span>
                    </div>
                    <div className="content d-flex flex-column">
                        <div className="selection d-flex flex-column justify-content-center">
                            <Radio
                                checked={paymentState[0]}
                                onChange={() =>
                                    this.props.onPaymentMethodChange("COD")
                                }
                            >
                                Thanh toán khi nhận hàng (COD)
                            </Radio>
                        </div>
                        <div className="selection d-flex flex-column justify-content-center">
                            <Radio
                                checked={paymentState[1]}
                                onChange={() =>
                                    this.props.onPaymentMethodChange("ATM")
                                }
                            >
                                Thanh toán chuyển khoản
                            </Radio>
                        </div>
                    </div>
                </div>
                <div className="info">
                    <div className="titleHead d-flex justify-content-between align-items-center">
                        <span>Thông tin đơn hàng</span>
                        <span
                            onClick={() =>
                                this.props.onStepChange("shoppingCart")
                            }
                        >
                            THAY ĐỔI
                        </span>
                    </div>
                    <div className="content d-flex flex-column">
                        {productsOnCart.map((product, index) => {
                            return (
                                <div
                                    key={index}
                                    className="infoProduct d-flex justify-content-between"
                                >
                                    <div className="d-flex">
                                        <div className="image">
                                            <img
                                                src={product.image[0]}
                                                at={product.name}
                                            ></img>
                                        </div>
                                        <div className="titleInfoProduct d-flex flex-column justify-content-between">
                                            <div className="d-flex flex-column">
                                                <span>{`${product.name} - ${product.size}`}</span>
                                                <span>{product.productID}</span>
                                            </div>
                                            <span>{subtotalPrice}</span>
                                        </div>
                                    </div>
                                    <div className="quantity">
                                        <span>{`x${product.quantity}`}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="cost d-flex justify-content-between align-items-center">
                    <span>PHÍ GIAO HÀNG</span>
                    <span>MIỄN PHÍ</span>
                </div>
                <div className="total d-flex align-items-center justify-content-between">
                    <span>Thành tiền</span>
                    <span>{subtotalPrice}</span>
                </div>
            </div>
        );
    }
}
