import React, { Component } from "react";
import { notification } from 'antd'

class Summary extends Component {
    goToNextStep = () => {
        const { productsOnCart } = this.props;
        if (productsOnCart.length > 0) {
            this.props.onStepChange("customerInfo");
        } else {
            notification.warning({
                message: "Giỏ hàng trống!",
                placement: "bottomRight"
            });
        }
    };

    render() {
        let { subtotalPrice } = this.props;
        subtotalPrice =
            subtotalPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") +
            " VNĐ";
        return (
            <div className="right d-flex flex-column">
                <span>Tạm Tính</span>
                <span>(Số lượng: 4)</span>
                <span>{subtotalPrice}</span>
                <span onClick={() => this.goToNextStep()}>
                    THANH TOÁN
                </span>
            </div>
        );
    }
}

export default Summary;
