import { Button } from "antd";
import React, { Component } from "react";
export default class ConfirmPayment extends Component {
    render() {
        return (
            <div className="footerPageConfirmPayment">
                <Button
                    loading={this.props.paymentLoading}
                    onClick={() => {
                        window.gtag_report_conversion(
                            "https://tailorwings.com/shopping-cart"
                        );
                        this.props.uploadNewOrder();
                    }}
                >
                    HOÀN TẤT ĐẶT HÀNG
                </Button>
            </div>
        );
    }
}
