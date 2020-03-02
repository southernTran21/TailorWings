import { Modal, message } from 'antd';
import React, { Component } from 'react';
import WrappedLoginForm from './LoginForm'
import './LoginModal.scss'
import auth from '../../app/auth'

class LoginModal extends Component {
    constructor(props) {
        super(props);
        let accountInfo = JSON.parse(sessionStorage.getItem('accountInfo')) || { isAuthen: false };
        this.state = {
            visible: false,
            isAuthen: accountInfo.isAuthen,
            loginStatus: accountInfo.isAuthen ? 'Đăng xuất' : 'Đăng nhập'
        };
    }

    static getDerivedStateFromProps(props, state) {
        let accountInfo = JSON.parse(sessionStorage.getItem('accountInfo')) || { isAuthen: false };
        return {
            loginStatus: accountInfo.isAuthen ? 'Đăng xuất' : 'Đăng nhập'
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    closeModal = () => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    onClickHandling = () => {
        if (auth.isAuthenticated()) {
            auth.logout(() => {
                let accountInfo = {
                    username: '',
                    password: '',
                    isAuthen: false
                }
                sessionStorage.setItem('accountInfo', JSON.stringify(accountInfo));
                this.props.history.push('/');
            })
            message.success('Đăng xuất thành công');
            this.setState({ loginStatus: 'Đăng Nhập' })
        } else {
            this.showModal();
        }
        this.props.onClickHandling();
    }

    onLoginStatusChanged = () => {
        this.setState({ loginStatus: 'Đăng xuất' })
    }



    render() {
        const { loginStatus } = this.state;
        return (
            <div id='loginModal' >
                <a id={5} data-toggle="collapse" onClick={this.onClickHandling} className="dropdown-toggle nav-link active">{loginStatus}</a>
                <Modal
                    style={{ padding: "0px" }}
                    title= "ĐĂNG NHẬP"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    centered
                    footer={[
                    ]}
                >
                    <WrappedLoginForm history={this.props.history} closeModal={this.closeModal} onLoginStatusChanged={this.onLoginStatusChanged} />
                </Modal>
            </div>
        );
    }
}

export default LoginModal;