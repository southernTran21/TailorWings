import React, { Component } from 'react';
import { Icon, notification } from 'antd';
import CheckOutModal from './CheckOutModal';

export default class CheckOut extends Component {
    goToNextStep = () => {
        let productsOnCart = JSON.parse(sessionStorage.getItem('productsOnCart')) || [];
        if (productsOnCart.length > 0) {
            this.props.onStepChange('customerInfo');
            // this.setState({
            //     visible: true,
            // });
        } else {
            notification.warning({
                message: 'Giỏ hàng trống!',
                placement: 'bottomRight'
            });
        }
    };

    render() {
        return (
            <div className='checkOutFixBottom'>
                <div className='title d-flex flex-row justify-content-between align-items-center'>
                    <span>Tạm tính</span>
                    <span>{this.props.subtotalPrice}</span>
                </div>
                <div className='button d-flex flex-row align-items-center justify-content-center'>
                    <span onClick={() => this.goToNextStep()}>
                        Thanh toán
                            <Icon type='right' />
                    </span>
                    {/* <CheckOutModal /> */}
                </div>
            </div>
        )
    }
}
