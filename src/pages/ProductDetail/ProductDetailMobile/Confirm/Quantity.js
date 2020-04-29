import { Icon } from "antd";
import React, { Component } from "react";
import "./Confirm.scss";

export default class Quantity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.currentSelectedProduct.quantity,
            // currentSelectedProduct: { ...this.props.currentSelectedProduct },
        };
    }

    onQuantityPlus = () => {
        let { quantity } = this.state;
        let currentSelectedProduct = { ...this.props.currentSelectedProduct };
        quantity = Number(quantity) + 1;
        if (quantity < 10) {
            currentSelectedProduct.quantity = quantity;
            this.props.onQuantityChange(currentSelectedProduct);
            this.setState({
                quantity,
            });
        }
    };

    onQuantityMinus = () => {
        let { quantity } = this.state;
        let currentSelectedProduct = { ...this.props.currentSelectedProduct };
        quantity = Number(quantity) - 1;
        if (quantity > 0) {
            currentSelectedProduct.quantity = quantity;
            this.props.onQuantityChange(currentSelectedProduct);
            this.setState({
                quantity,
            });
        }
    };

    render() {
        const { quantity } = this.state;
        return (
            <div className="quantity d-flex flex-row justify-content-center align-items-center">
                <div className="changeQuantity d-flex justify-content-center align-items-center">
                    <Icon
                        id="minus"
                        onClick={this.onQuantityMinus}
                        type="minus"
                    />
                    <span className='ant-input'>{quantity}</span>
                    <Icon id="plus" onClick={this.onQuantityPlus} type="plus" />
                </div>
            </div>
        );
    }
}
