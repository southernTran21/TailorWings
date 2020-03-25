import React, { Component } from "react";
import iconAccount from "../../../../assets/imageHomePage/iconAccount.svg";
import iconShoppingBadge from "../../../../assets/imageHomePage/shopping-bag.svg";
import auth from "../../../../app/auth";
import WrappedLoginForm from "../../../../components/SideBar/LoginForm";
import { Modal, message } from "antd";
import { Link } from "react-router-dom";

export default class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        let accountInfo = JSON.parse(sessionStorage.getItem("accountInfo")) || {
            isAuthen: false
        };
        this.state = {
            visible: false,
            isAuthen: accountInfo.isAuthen,
            loginStatus: accountInfo.isAuthen ? "Đăng xuất" : "Đăng nhập"
        };
    }

    static getDerivedStateFromProps(props, state) {
        let accountInfo = JSON.parse(sessionStorage.getItem("accountInfo")) || {
            isAuthen: false
        };
        return {
            loginStatus: accountInfo.isAuthen ? "Đăng xuất" : "Đăng nhập"
        };
    }

    showModal = () => {
        this.setState({
            visible: true
        });
    };

    closeModal = () => {
        this.setState({
            visible: false
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false
        });
    };

    onClickHandling = () => {
        if (auth.isAuthenticated()) {
            auth.logout(() => {
                let accountInfo = {
                    username: "",
                    password: "",
                    isAuthen: false
                };
                sessionStorage.setItem(
                    "accountInfo",
                    JSON.stringify(accountInfo)
                );
                this.props.history.push("/");
            });
            message.success("Đăng xuất thành công");
            this.setState({ loginStatus: "Đăng Nhập" });
        } else {
            this.showModal();
        }
        // this.props.onClickHandling();
    };

    onLoginStatusChanged = () => {
        this.setState({ loginStatus: "Đăng xuất" });
    };

    render() {
        const { loginStatus } = this.state;
        const { totalProductsOnCart } = this.props;
        return (
            <div className="personalInfo_wrapper d-flex justify-content-between">
                <div
                    className="account d-flex justify-content-center align-items-center"
                    onClick={this.onClickHandling}
                >
                    <img src={iconAccount} alt="TailorWings-Account" />
                    <span className="fontMontserrat">TÀI KHOẢN</span>
                    <Modal
                        style={{ padding: "0px" }}
                        title="ĐĂNG NHẬP"
                        visible={this.state.visible}
                        onCancel={this.handleCancel}
                        centered
                        footer={[]}
                    >
                        <WrappedLoginForm
                            history={this.props.history}
                            closeModal={this.closeModal}
                            onLoginStatusChanged={this.onLoginStatusChanged}
                        />
                    </Modal>
                </div>
                <div className="shoppingBadge d-flex justify-content-center align-items-center">
                    <Link
                        to="/shopping-cart"
                        style={{
                            width: "fit-content",
                            height: "fit-content",
                            textDecoration: "none",
                            border: "none"
                        }}
                    >
                        <img
                            src={iconShoppingBadge}
                            alt="TailorWings-ShoppingBadge"
                        />
                        <span className="fontMontserrat">{`GIỎ HÀNG (${totalProductsOnCart})`}</span>
                    </Link>
                </div>
            </div>
        );
    }
}
