import React, { Component } from 'react'
import { Button, message } from 'antd';
export default class ConfirmPayment extends Component {
    render() {
        return (
            <div className='footerPageConfirmPayment'>
                <Button onClick={() => message.success('Hoàn tất thanh toán')} >HOÀN TẤT ĐẶT HÀNG</Button>
            </div>
        )
    }
}
