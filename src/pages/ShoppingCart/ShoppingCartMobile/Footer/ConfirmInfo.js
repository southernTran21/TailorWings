import React, { Component } from 'react'
import { Button } from 'antd';
export default class ConfirmInfo extends Component {
    render() {
        return (
            <div className='footerPageConfirmInfo'>
                <Button onClick={() => this.props.onCustomerInfoValidate()} >GIAO ĐẾN ĐỊA CHỈ NÀY</Button>
            </div>
        )
    }
}