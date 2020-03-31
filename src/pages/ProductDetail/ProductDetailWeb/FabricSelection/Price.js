import React, { Component } from "react";

export default class Price extends Component {
    render() {
        let { productName, productPrice } = this.props;
        productName = productName == null ? "" : productName;
        productPrice =
            productPrice == null
                ? ""
                : productPrice
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") +
                " " +
                "VNĐ";
        return (
            <div className="price d-flex flex-column justify-content-end">
                <span>{productPrice}</span>
                <span>{productName}</span>
                <span className="button" onClick={() => this.props.onselectionStepChange('sizeSelection')}>CHỌN SIZE</span>
            </div>
        );
    }
}
