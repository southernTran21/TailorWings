import React, { Component } from "react";
import "./CheckOutForm.scss";

import { Input } from "antd";

export default class CheckOutForm extends Component {
    render() {
        return (
            <div className="checkOutForm">
                <div className="inputName">
                    <div className="title">
                        <span>Tên</span>
                    </div>
                    <Input placeholder="Basic usage" />
                </div>
                <div className="inputPhone">
                    <div className="title">
                        <span>Điện thoại</span>
                    </div>
                    <Input placeholder="Basic usage" />
                </div>
                <div className="inputAddress">
                    <div className="title">
                        <span>Địa chỉ</span>
                    </div>
                    <Input placeholder="Basic usage" />
                </div>
                <div className="inputEmail">
                    <div className="title">
                        <span>Email</span>
                    </div>
                    <Input placeholder="Basic usage" />
                </div>
                <div className='button'>
                    <span>Đặt hàng</span>
                </div>
            </div>
        );
    }
}
