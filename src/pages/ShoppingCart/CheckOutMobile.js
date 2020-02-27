import React, { Component } from 'react';
import CheckOutModal from './CheckOutModal';

class CheckOutMobile extends Component {
    render() {
        const { subtotalPrice, totalProductsOnCart } = this.props;
        return (
            <div className="infoTotal d-flex justify-content-between">
                <div className="titleTotal">
                    <a>Tổng: </a>
                    <a>{this.props.subtotalPrice}</a>
                </div>

                <div className="btnCheckOut">
                    <CheckOutModal subtotalPrice={subtotalPrice} totalProductsOnCart={totalProductsOnCart} />
                </div>
            </div>
        );
    }
}

export default CheckOutMobile;