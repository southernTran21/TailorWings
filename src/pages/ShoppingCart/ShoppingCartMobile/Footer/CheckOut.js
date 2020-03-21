import React, { Component } from 'react';
import { Icon } from 'antd';
import CheckOutModal from './CheckOutModal';

export default class CheckOut extends Component {
    render() {
        return (
            <div className='checkOutFixBottom'>
                <div className='title d-flex flex-row justify-content-between align-items-center'>
                    <span>Tạm tính</span>
                    <span>{this.props.subtotalPrice}</span>
                </div>
                <div className='button d-flex flex-row align-items-center justify-content-center'>
                    {/* <span>
                        Thanh toán
                            <Icon type='right' />
                    </span> */}
                    <CheckOutModal />
                </div>
            </div>
        )
    }
}
