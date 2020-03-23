import React, { Component } from 'react'
import { Button, message } from 'antd';
export default class ConfirmPayment extends Component {
    render() {
        return (
            <div>
                <Button onClick={() => message.success('Hoàn tất thanh toán')} >Complete</Button>
            </div>
        )
    }
}
