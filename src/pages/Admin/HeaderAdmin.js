/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './HeaderAdmin.scss';
import auth from '../../app/auth'
import { message } from 'antd';

export class HeaderAdmin extends Component {
    render() {
        const { history } = this.props;
        return (
            <div className="headerAdmin d-flex flex-row justify-content-between align-items-center">
                <div className="titleHeader d-flex justify-content-start">
                    <a>TailorWings Admin</a>
                </div>
                <div className="titleHeader d-flex justify-content-end">
                    <a
                        onClick={() => {
                            auth.logout(() => {
                                let accountInfo = {
                                    username: '',
                                    password: '',
                                    isAuthen: false
                                }
                                sessionStorage.setItem('accountInfo', JSON.stringify(accountInfo));
                                message.success('Đăng xuất thành công');
                                history.push("/");
                            });
                        }}
                    >
                        Logout
                    </a>
                </div>
            </div>
        );
    }
}

export default HeaderAdmin;
