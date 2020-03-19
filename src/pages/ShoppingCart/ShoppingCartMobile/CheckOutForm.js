import React, { Component } from "react";
import "./CheckOutForm.scss";
import NumberFormat from "react-number-format";
import { Input } from "antd";
import classNames from 'classnames'

export default class CheckOutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: '',
            address: "",
            email: "",
            errorState: new Array(3).fill(false)
        };
    }

    onInputChange = e => {
        let { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    onFinishClicked = () => {
        const { name, phone, email, address } = this.state;
        let errorState = [];
        let phoneModified = phone.replace(/ /gi, '');
        errorState[0] = name === '' ? true : false;
        errorState[1] = isNaN(phoneModified) || phone === '' || phoneModified.split('')[0] != 0 ? true : false;
        errorState[2] = email.length > 0 && !this.validateEmail(email)  ? true : false;
        console.log('errorState', errorState)
        if (errorState.includes(true)) {
            this.setState({
                errorState
            });
        } else {
            let customerInfo = { name, phoneModified, email, address };
            this.props.uploadNewOrder(customerInfo);
            this.setState({
                errorState
            });
        }
    };

    validateEmail = email => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log('re.test(String(email).toLowerCase())', re.test(String(email).toLowerCase()))
        return re.test(String(email).toLowerCase());
    };

    render() {
        const { errorState } = this.state;
        return (
            <div className="checkOutForm">
                <div className="inputName">
                    <div className="title">
                        <span>Tên</span>
                    </div>
                    <Input
                        name="name"
                        placeholder="Tên khách hàng"
                        maxLength={30}
                        onChange={this.onInputChange}
                    />
                    <small className={classNames({error: errorState[0], errorUnvisible: !errorState[0]})}>
                        Vui lòng nhập tên khách hàng
                    </small>
                </div>
                <div className="inputPhone">
                    <div className="title">
                        <span>Điện thoại</span>
                    </div>
                    <NumberFormat
                        name="phone"
                        className="ant-input"
                        placeholder="Số điện thoại khách hàng"
                        format="#### ### ###"
                        mask="_"
                        onChange={this.onInputChange}
                    />
                    <small className={classNames({error: errorState[1], errorUnvisible: !errorState[1]})}>
                        Vui lòng nhập đúng 10 số điện thoại
                    </small>
                </div>
                <div className="inputAddress">
                    <div className="title">
                        <span>Địa chỉ</span>
                    </div>
                    <Input
                        name="address"
                        placeholder="Địa chỉ giao hàng"
                        maxLength={100}
                        onChange={this.onInputChange}
                    />
                    {/* <small id="helpIdTextTitle" className="">
                        Điền tiêu đề vào đây
                    </small> */}
                </div>
                <div className="inputEmail">
                    <div className="title">
                        <span>Email</span>
                    </div>
                    <Input
                        name="email"
                        placeholder="Email khách hàng"
                        maxLength={50}
                        onChange={this.onInputChange}
                    />
                    <small className={classNames({error: errorState[2], errorUnvisible: !errorState[2]})}>
                        Vui lòng nhập đúng email. Vd: abc@gmail.com
                    </small>
                </div>
                <div className="button" onClick={this.onFinishClicked}>
                    <span>Đặt hàng</span>
                </div>
            </div>
        );
    }
}
