import React, { Component } from 'react';
import { Icon } from 'antd';
import tailor from '../../../../assets/iconImage/tailorwings.svg';
class FitMenu extends Component {
    render() {
        return (
            <div className='fit-menu-wraper d-flex flex-row justify-content-between align-items-center'>
                <div className='icon d-flex flex-column justify-content-center align-items-center'>
                    <img src={tailor} alt='' />
                    <span>Trang chủ</span>
                </div>
                <div className='icon d-flex flex-column justify-content-center align-items-center'>
                    <Icon type='heart' />
                    <span>Đã Lưu</span>
                </div>
                <div className='icon d-flex flex-column justify-content-center align-items-center'>
                    <Icon type='shopping' />
                    <span>Giỏ Hàng</span>
                </div>
            </div>
        );
    }
}

export default FitMenu;