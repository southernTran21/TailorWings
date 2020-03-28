import React, { Component } from "react";
import "./SizeSelection.scss";
import { Icon, message } from "antd";
import { connect } from "react-redux";
import * as actions from "../../../../actions/index";
//
import SizeImage from "./SizeImage";
import BodyMetric from "./BodyMetric";
import SizeSelection from "./SizeSelection";
import ProductInfo from "./ProductInfo";
//
import Empty from "../../../../assets/imageSizeSelection/Asset 9.svg";
import XS from "../../../../assets/imageSizeSelection/size XS.svg";
import S from "../../../../assets/imageSizeSelection/size S.svg";
import M from "../../../../assets/imageSizeSelection/size M.svg";
import L from "../../../../assets/imageSizeSelection/size L.svg";
import XL from "../../../../assets/imageSizeSelection/size XL.svg";
import XXL from "../../../../assets/imageSizeSelection/size XXL.svg";

let imageSize = {
    Empty: Empty,
    XS: XS,
    S: S,
    M: M,
    L: L,
    XL: XL,
    XXL: XXL
};

class SizeSelectionWeb extends Component {
    onConfirmButtonClicked = () => {
        const { currentSelectedProduct, isSizeMetricUpdate } = this.props;
        let isSizeSelected = currentSelectedProduct.size != null;
        let isAllMetricFill = !currentSelectedProduct.bodyMetric.includes("");
        let isAllMetricEmpty = currentSelectedProduct.bodyMetric.every(
            metric => metric === ""
        );
        if (
            (isSizeSelected && isAllMetricFill) ||
            (isSizeSelected && isAllMetricEmpty) ||
            (!isSizeSelected && isAllMetricFill)
        ) {
            console.log('here')
            this.addToCart();
            if (isSizeMetricUpdate) {
                this.updateSizeMetricToStorage(currentSelectedProduct);
            }
        } else {
            message.error("Vui lòng chọn size hoặc cung cấp 3 số đo cơ thể!");
        }
    };

    addToCart = () => {
        const { currentSelectedProduct } = this.props;
        let addedProduct = { ...currentSelectedProduct };
        delete addedProduct["default"];
        delete addedProduct["timestamp"];
        delete addedProduct["visibility"];
        delete addedProduct["id"];
        delete addedProduct["designDescription"];
        if (addedProduct) {
            this.props.onAddProductToCart(
                addedProduct,
                currentSelectedProduct.quantity
            );
            this.props.history.push('/shopping-cart');
        }
    };

    updateSizeMetricToStorage = selectedProduct => {
        localStorage.setItem("size", JSON.stringify(selectedProduct.size));
        localStorage.setItem(
            "bodyMetric",
            JSON.stringify(selectedProduct.bodyMetric)
        );
    };

    render() {
        let { currentSelectedProduct } = this.props;
        let size = Empty;
        let bodyMetric = currentSelectedProduct.bodyMetric;
        if (
            currentSelectedProduct.size != null &&
            currentSelectedProduct.size !== ""
        ) {
            size = currentSelectedProduct.size;
        }
        return (
            <div className="pageSizeSelectionWeb d-flex align-items-center">
                <div
                    className="iconBack d-flex flex-column"
                    onClick={() =>
                        this.props.onselectionStepChange("fabricSelection")
                    }
                >
                    <Icon type="arrow-left" />
                    <span>CHỌN VẢI</span>
                </div>
                <div className="bodyScale d-flex flex-column align-items-center">
                    <SizeImage imageSize={imageSize[`${size}`]} size={size} />
                    <BodyMetric
                        bodyMetric={bodyMetric}
                        onBodyMetricUpdated={this.props.onBodyMetricUpdated}
                    />
                    <SizeSelection
                        size={size}
                        onSizeUpdated={this.props.onSizeUpdated}
                        currentSelectedProduct={currentSelectedProduct}
                    />
                </div>
                <div className="d-flex flex-column">
                    <ProductInfo
                        currentSelectedProduct={currentSelectedProduct}
                        onQuantityUpdated={this.props.onQuantityUpdated}
                    />
                    <div
                        className="buttonApcept d-flex justify-content-center align-items-center"
                        onClick={this.onConfirmButtonClicked}
                    >
                        ĐẶT MAY
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProductToCart: (product, quantity) => {
            dispatch(actions.addProductToCart(product, quantity));
        }
    };
};
export default connect(null, mapDispatchToProps)(SizeSelectionWeb);
