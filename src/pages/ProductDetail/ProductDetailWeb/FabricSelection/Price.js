import React, { Component } from "react";
import { Link } from "react-router-dom";
import { removePunctuation } from "../../../../services/CommonFunction";

export default class Price extends Component {
    render() {
        let { productName, productPrice, urlSearch } = this.props;
        productName = productName == null ? "" : productName;
        productPrice =
            productPrice == null
                ? ""
                : productPrice
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") +
                " " +
                "VNĐ";
        let productNameModified = removePunctuation(productName.toLowerCase());
        productNameModified = productNameModified.replace(/ /gi, "-");
        return (
            <div className="price d-flex flex-column justify-content-end">
                <span>{productPrice}</span>
                <span>{productName}</span>
                {/* <span className="button" onClick={() => this.props.onselectionStepChange('sizeSelection')}>CHỌN SIZE</span> */}
                <Link to={{
                    pathname: `/product-detail/size-selection/${productNameModified}`,
                    search: `${urlSearch}`,
                }}
                onClick={() => this.props.onSizeSelectionNavigating()}
                >
                    <span className="button">CHỌN SIZE</span>
                </Link>
            </div>
        );
    }
}
