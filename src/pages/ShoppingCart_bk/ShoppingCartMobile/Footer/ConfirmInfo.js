import React, { Component } from 'react'
import { Button } from 'antd';
export default class ConfirmInfo extends Component {
    render() {
        return (
            <div>
                <Button onClick={() => this.props.onStepChange('paymentConfirm')} >Go to PaymentConfirm</Button>
            </div>
        )
    }
}
