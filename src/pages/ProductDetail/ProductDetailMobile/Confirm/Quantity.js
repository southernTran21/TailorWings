import React, { Component } from 'react';
import './Confirm.scss';
import { Icon, Input, message } from 'antd';
import NumberFormat from 'react-number-format';

export default class Quantity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.currentSelectedProduct.quantity,
            currentSelectedProduct: { ...this.props.currentSelectedProduct }
        }
    }


    onQuantityInput = (e) => {
        let { currentSelectedProduct } = this.state;
        let value = e.target.value;
        value = value == null ? 'null' : value;
        if (value !== '') {
            if (!isNaN(value)) {
                if (Number(value) > 0) {
                    currentSelectedProduct.quantity = Number(value);
                    this.props.onSelectedProductUpdating(currentSelectedProduct);
                    this.setState({
                        quantity: value
                    })
                } else {
                    message.error('Vui lòng nhập số lượng lớn hơn 0!');
                }
            } else {
                message.error('Vui lòng nhập số lượng dạng chữ số!');
            }
        } else {
            currentSelectedProduct.quantity = 1;
            this.props.onSelectedProductUpdating(currentSelectedProduct);
            this.setState({
                quantity: value
            })
        }
    }

    onQuantityPlus = () => {
        let { quantity, currentSelectedProduct } = this.state;
        quantity = Number(quantity) + 1;
        if (quantity < 10) {
            currentSelectedProduct.quantity = quantity;
            this.props.onSelectedProductUpdating(currentSelectedProduct);
            this.setState({
                quantity
            })
        }
    }

    onQuantityMinus = () => {
        let { quantity, currentSelectedProduct } = this.state;
        quantity = Number(quantity) - 1;
        if (quantity > 0) {
            currentSelectedProduct.quantity = quantity;
            this.props.onSelectedProductUpdating(currentSelectedProduct);
            this.setState({
                quantity
            })
        }
    }

    render() {
        const { quantity } = this.state;
        return (
            <div className='quantity d-flex flex-row justify-content-center align-items-center'>
                <div className='changeQuantity d-flex justify-content-center align-items-center'>
                    <Icon id='minus' onClick={this.onQuantityMinus} type='minus' />
                    <NumberFormat
                        id='input'
                        onChange={(e) => this.onQuantityInput(e)}
                        value={quantity}
                        className='ant-input'
                        format="#"
                    />
                    <Icon id='plus' onClick={this.onQuantityPlus} type='plus' />
                </div>
            </div>
        );
    }
}
