import React, { Component } from "react";

class Summary extends Component {
    render() {
        let { subtotalPrice } = this.props;
        subtotalPrice =
            subtotalPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") +
            " VNĐ";
        return (
            <div className="right d-flex flex-column">
                <span>Tạm Tính</span>
                <span>{subtotalPrice}</span>
                <span>THANH TOÁN</span>
            </div>
        );
    }
}

export default Summary;
