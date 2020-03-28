import React, { Component } from "react";
import "./CustomerInfo.scss";
import { Input, Checkbox } from "antd";
import NumberFormat from "react-number-format";
import classNames from "classnames";

export default class CustomerInfo extends Component {
    // onInputChange = e => {
    //     let { name, value } = e.target;
    //     let { customerInfo } = this.props;
    //     customerInfo[name] = value;
    //     this.props.onCustomerInfoUpdate(customerInfo);
    //     this.setState({
    //         customerInfo
    //     });
    // };
    render() {
        // const { errorValidate } = this.props;
        // const { name, address, phone } = this.props.customerInfo;
        return (
            <div className="pageCustomerInfo">
                <div className="titleHeaderPage d-flex justify-content-center">
                    <span>Địa chỉ nhận hàng</span>
                </div>
                <div className="inputInfo">
                    <div className="input">
                        <span>Tên người nhận</span>
                        <Input
                            name="name"
                            // value={name}
                            placeholder="Nhập họ & tên người nhận"
                            maxLength={30}
                            // onChange={this.onInputChange}
                        />
                        <small
                            className={classNames({
                                // error: errorValidate[0],
                                // errorUnvisible: !errorValidate[0]
                            })}
                        >
                            Vui lòng nhập tên khách hàng
                        </small>
                    </div>
                    <div className="input">
                        <span>Số điện thoại</span>
                        <NumberFormat
                            name="phone"
                            // value={phone}
                            className="ant-input"
                            placeholder="Nhập số điện thoại nhận hàng"
                            format="#### ### ###"
                            mask="_"
                            // onChange={this.onInputChange}
                        />
                        <small
                            className={classNames({
                                // error: errorValidate[1],
                                // errorUnvisible: !errorValidate[1]
                            })}
                        >
                            Vui lòng nhập đúng 10 số điện thoại
                        </small>
                    </div>
                    <div className="input">
                        <span>Địa chỉ nhận hàng</span>
                        <Input
                            name="address"
                            // value={address}
                            placeholder="Nhập số nhà, tên đường..."
                            maxLength={50}
                            // onChange={this.onInputChange}
                        />
                        <small
                            className={classNames({
                                // error: errorValidate[2],
                                // errorUnvisible: !errorValidate[2]
                            })}
                        >
                            Vui lòng nhập địa chỉ giao hàng
                        </small>
                    </div>
                </div>
                <div className="checkBox">
                    <Checkbox
                        onChange={e => this.props.onRememberInfo(e)}
                        // defaultChecked={this.props.rememberChecked}
                    >
                        <span className="content">
                            Lưu thông tin cho lần đặt may tới
                        </span>
                    </Checkbox>
                </div>
                <div
                    className="buttonApcept d-flex justify-content-center align-items-center"
                    onClick={() => this.props.onStepChange("paymentConfirm")}
                >
                    <span>GIAO ĐẾN ĐỊA CHỈ NÀY</span>
                </div>
            </div>
        );
    }
}
